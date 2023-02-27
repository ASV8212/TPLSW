$(document).ready(function () {
	
	if(getUrlParam('PrMs3')!=""){
		$("#GoBackToAppln").show();
	}
	for(var z=0;z<$('.rscnt').length;z++){
		$($('.rscnt')[z]).text($("#DMY5").val().split('|')[3].split(',')[z])
	}
	if($("#PrMs5").val()=="IQ")
	 {
		 $(".IQBTN").show();
		 $(".IQBTN").find('#SaveOI').attr("name","RESOLUTION");
		 $('.IQBTN').find('#SaveOI').attr("style","width: 170px");
		 $(".OQBTN").hide();
		 
		 if($("#PrMs4").val()=="IQQRL")
		 {
			 $(".NIQQRLBTN").hide()
		 }
		 else
		 {
			 $(".NIQQRLBTN").show() 
		 }
	 }
     if($("#PrMs5").val()=="OQ")
	 {
		 $(".IQBTN").hide();
		 $(".OQBTN").show();
		 $(".OQBTN").find('#SaveOI').attr("name","RESOLUTION");
		 $('.OQBTN').find('#SaveOI').attr("style","width: 170px");
		 
		 if($("#PrMs4").val()=="IQQR")
		 {
			 $(".IQQRBTN").show()
			 $(".IQQRLBTN").hide()
			 $(".IQReopen").hide()
		 }
		 else
		 {
		    $(".IQQRBTN").hide()
			$(".IQQRLBTN").show()
			$(".IQReopen").show()
		 }
	 }
     
	 if($("#PrMs5").val()=="CQ")
	 {
		$(".CQBTN").show(); 
		$(".CQBTN").find('#SaveOI').attr("name","RESOLUTION");
		$('.CQBTN').find('#SaveOI').attr("style","width: 170px");
	 }
	LoadMultiDataQuery("",$("#PrcsID").val(),"","KYC","MNGQDBfields","","S01");
	
	
	
      $('.FormPageTab').find("#"+$("#PrMs5").val()).addClass('active');
	  

	  if($("#PrMs4").val()=="")
	  {
		$(".CardNS").hide();
	  } 
	 else
	 {
	   $('.FormPageSubTab').find("#"+$("#PrMs4").val()).addClass('active');
	 }
	 
	 $(document).on('click', '.GoBackToAppln', function () {
    if(getUrlParam('PrMs3')!=""){
		$(location).attr('href',atob(getUrlParam('PrMs3')));         	
	}
	})
	  
	 $(document).on("click","#OQ",function() {

		    var Data="MANGQRY" 
			var MainTab=$(this).attr("id");
		    var ProcessId=$("#PrcsID").val();
		    var ActivityId=$("#ActvID").val();
		    var SubTab=$(".FormPageSubTab1 li.active").length 
               if(SubTab<=0)
                 {
                  SubTab="IQQR";
                 }
               else
                 {
                   SubTab=$(".FormPageSubTab1 li.active").attr('id');
                 }

        if(getUrlParam('PrMs3')!=""){
		$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+ProcessId+"&ActvID="+ActivityId+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data+"&PrMs3="+getUrlParam('PrMs3'));         		 
		}
		else{
        $(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+ProcessId+"&ActvID="+ActivityId+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data);         		 
		}
	 
	 });
	 
	  $(document).on("click","#IQ",function() {	
		 var Data="MANGQRY" 
			 var MainTab=$(this).attr("id");
		     var ProcessId=$("#PrcsID").val();
		     var ActivityId=$("#ActvID").val();
		    var SubTab=$(".FormPageSubTab1 li.active").length 
               if(SubTab<=0)
                 {
                  SubTab="IQQR";
                 }
               else
                 {
                 SubTab=$(".FormPageSubTab1 li.active").attr('id');
                 }

        if(getUrlParam('PrMs3')!=""){
        $(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+ProcessId+"&ActvID="+ActivityId+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data+"&PrMs3="+getUrlParam('PrMs3'));         		 
		}
		else{
		$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+ProcessId+"&ActvID="+ActivityId+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data);         		 
		}
	 
	 });
	 
	 $(document).on("click","#IQQRL",function() {
		 var Data="MANGQRY" 
	     
			var MainTab=$(".FormPageTab li.active").attr('id');
		    var SubTab=$(this).attr("id");
		    if(SubTab=="")
		    	{
		    	 SubTab="IQQR";
		    	}
		if(getUrlParam('PrMs3')!=""){
				$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data+"&PrMs3="+getUrlParam('PrMs3'));         		    
			}
			else{
				$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data);         		    
			}
			 
	 });
	 
	 $(document).on("click","#IQQR",function() {
		 var Data="MANGQRY" 
	     
			var MainTab=$(".FormPageTab li.active").attr('id');
		    var SubTab=$(this).attr("id");
		    if(SubTab=="")
		    	{
		    	 SubTab="IQQRL";
		    	}
		if(getUrlParam('PrMs3')!=""){
			$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data+"&PrMs3="+getUrlParam('PrMs3'));         		    
		}
		else{
		$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data);         		    
		}
			 
	 });

	 $(document).on("click","#CQ",function() {
		 var Data="MANGQRY" 
	     
			var MainTab=$(this).attr("id");
		    var SubTab="";
		      if(getUrlParam('PrMs3')!=""){
		      $(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data+"&PrMs3="+getUrlParam('PrMs3'));         		 	 
			}
			else{
				$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4="+SubTab+"&PrMs5="+MainTab+"&PrMs8="+MainTab+"_"+SubTab+"&PrMs9=FormPageTab1&PrMs10="+Data);         		 	 
			}
	 });

	 
	 $(document).on("click","#RQ",function() {
		
		
		var xml=UI_getdata($("#PrcsID").val(),$('#LogUsr').val(),"","","","LSW_SGETQUERYTO");
		$('.RAISE').find("#MNGQ_TOUSRIDI").empty();
		$('.RAISE').find("#MNGQ_TOUSRIDI").append($(xml).find("RESULT").html());
		$('.RAISE').find("#MNGQ_TOUSRIDI").material_select(); 
        
		$('.RAISE').find(".QRYDETAILS").hide()
        
        $('.RAISE').find("#MNGQ_SECTNID").val('');
		$('.RAISE').find("#MNGQ_SECTNID").material_select(); 
        
		$('.RAISE').find("#MNGQ_TYP").val('');
		$('.RAISE').find("#MNGQ_TYP").material_select(); 
        
		$('.RAISE').find("#MNGQ_APPLNO").val('');
		$('.RAISE').find("#MNGQ_APPLNO").material_select(); 
		$('.RAISE').find("#MNGQ_DESC").val('');
		
		  $('.RASHW').show();
		
        
  $('.RAISE').find("#MNGQ_ATTCHURLUPLOAD").show();
  $('.RAISE').find('.rounded').hide();
  $('.RAISE').find("#MNGQ_ATTCHURL").val('');
  $('.RAISE').find("input[name=datafile]").attr('disabled',false);
  $('.RAISE').find("input[name=datafile]").attr('display','block');
  
  $('.RAISE').find('.FIDU').find('.name').text('Click Here to Upload')
  
  
		 $("#RAISEQUERY").click();
		 
	 });
	
	
/*	$(document).on("click","#RAISEQRYDONE",function() {
		
		  var TouserName=	$('.RAISE').find($("#MNGQ_TOUSRIDI").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
		  $('.RAISE').find("#MNGQ_TOUSRNAME").val(TouserName);
		  var TOUSERROLE =$('.RAISE').find("#MNGQ_TOUSRIDI").val()
		   $('.RAISE').find("#MNGQ_TOUSRID").val(TOUSERROLE.split("-")[0]);
		  $('.RAISE').find("#MNGQ_TOUSRROLE").val(TOUSERROLE.split("-")[1]);
		  $('.RAISE').find("#MNGQ_FRMUSRID").val($('#LogUsr').val());
		  $('.RAISE').find("#MNGQ_PRCSID").val($("#PrcsID").val());
		  
		  var MNGQ_QURYNAME=$('.RAISE').find($("#MNGQ_SECTNID").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
		  $('.RAISE').find("#MNGQ_QURYNAME").val(MNGQ_QURYNAME);
		  
		  var MNGQ_APPLNNAME=$('.RAISE').find($("#MNGQ_APPLNO").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
		  $('.RAISE').find("#MNGQ_APPLNNAME").val(MNGQ_APPLNNAME);
		  
		  
		  var FormXML =submitdata("MNGODBfields");
		var xml=UI_getdata(FormXML,"","","","","LSW_SPUSHDATATOQRYTBL1");
		var RESULT=$(xml).find('RESULT').text();
		if(RESULT=="SUCCESS")
		 {
          $(".close").click();
         }
		else
			{
			
			alert(RESULT)
			}
	 });
	
	
	*/
	
	 var DATA=["KYC|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	
	$(document).on("click",".ESCALATEQUERY",function() {
		 $("#ESCALATEQUERY").click();
	 });
	
	$(document).on("click","#BTNBANKING",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","BANKING","MNGQDBfields","","S02");
		var DATA=["BANKING|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
		
	});
	
	$(document).on("click","#BTNPROPERTY",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","PROPERTY","MNGQDBfields","","S03");
		var DATA=["PROPERTY|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	});
	
	$(document).on("click","#BTNFINANCIALS",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","FINANCIALS","MNGQDBfields","","S04");
		var DATA=["FINANCIALS|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	});
	
	$(document).on("click","#BTNCAMANDAPPR",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","CAMAPPRV","MNGQDBfields","","S05");
		var DATA=["CAMAPPRV|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	});
	
	$(document).on("click","#BTNDOCUMENT",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","DOCUMENTS","MNGQDBfields","","S06");
		var DATA=["DOCUMENTS|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	});
	
	$(document).on("click","#BTNREPORT",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","REPORTS","MNGQDBfields","","S07");
		var DATA=["REPORTS|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	});
	
	$(document).on("click","#BTNOTHERS",function() {
		
		LoadMultiDataQuery("",$("#PrcsID").val(),"","OTHERS","MNGQDBfields","","S08");
		var DATA=["OTHERS|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURLMain(HTML,"");
	 }
	}
	});
	
	
	 $(document).on("click",".RESOLUTION",function() {
	
  if($("#PrMs5").val()=="CQ")
  {
	  $(".CQRES").hide()
  }
else
{
$(".CQRES").show()
}	

     
		 if($("#PrMs5").val()=="IQ")
	     {
		   if($("#PrMs4").val()=="IQQRL")
		   {
			  $(".NIQQRLBTN").hide()
			  $(".IQReopen").hide();
			  $(".ResolutionSend").show();
		   }
		   else
		   {
			 $(".NIQQRLBTN").show()
             $(".ResolutionSend").show();			 
			 $(".IQQRLBTN").hide()
			 $(".IQReopen").hide()
		   }
	   }
     if($("#PrMs5").val()=="OQ")
	 {
		 if($("#PrMs4").val()=="IQQRL")
		   {
		    $(".NIQQRLBTN").hide()
            $(".ResolutionSend").show();
		    $(".IQQRLBTN").show()
	        $(".IQReopen").show()
			//$(".IQReopen").hide()
				if($("#LogUsr").val()=="business12")
				{
				$(".IQReopen").hide()
				}
				else
				{
				$(".IQReopen").show()
				}
		   }
		   else
		   {
			$(".NIQQRLBTN").hide()
            $(".ResolutionSend").show();
		    $(".IQQRLBTN").show()
	        $(".IQReopen").hide()
		   //$(".IQReopen").show()
		   }
	 }

  $("#MNGD_ATTACHURLUPLOAD").show();
  $('.ResViewIcon').hide();
  $("#MNGD_ATTACHURL").val('');
  $("input[name=datafile]").attr('disabled',false);
  $("input[name=datafile]").attr('display','block');
  $("#MNGD_DESC").val('');
  

  
  $('.RESUL').find('.name').text('Click Here to Upload')
		 
		  var RCnt=$($(this).closest('.DYNROW')).attr('data-row')
          var MainQry=$(this).attr("data-aria").split("|")[0]
		  var Type=$(this).attr("data-aria").split("|")[1]
		  var Date=$(this).attr("data-aria").split("|")[2]
		  var FormName=$(this).attr("data-aria").split("|")[3]
		  var ToName=$(this).attr("data-aria").split("|")[4]
		  var QryName=$(this).attr("data-aria").split("|")[5]
		  var Descrip=$(this).attr("data-aria").split("|")[6]
		  var FromId=$(this).attr("data-aria").split("|")[7]
		  var TOId=$(this).attr("data-aria").split("|")[8]   
		  var FromRole=$(this).attr("data-aria").split("|")[9] 
		  var ToRole=$(this).attr("data-aria").split("|")[10] 
		   var Status=$(this).attr("data-aria").split("|")[11] 
		   var html=$(this).closest(".DYNROW")
		  $(".RESOLUTIONPOP").empty();
		LoadMultiDataQuery_V1("",$("#PrcsID").val()+'|'+$("#LogUsr").val()+'|'+'Resolution'+'|'+$(html).find("#"+MainQry+RCnt).val(),"","RESOLUTIONPOP","MQMRDBfields","LSW_SFETCHQUYDATA");
 
   var DATA=["RESOLUTIONPOP|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChechUpldURL(HTML,"");
	 }
	}
 
 
 
		$("#MNGD_MNQID").val($(html).find("#"+MainQry+RCnt).val())
		$("#MNGD_ACTNTYP").val('Resolution');
		$("#MNGD_QURYSTATUS").val("Resolution");
		$("#MNGD_FRMUSRNAME").val($(html).find("#"+FormName+RCnt).val())
		$("#MNGD_TOUSRNAME").val($(html).find("#"+ToName+RCnt).val())
		$("#MNGD_FRMUSRID").val($("#LogUsr").val())
		$("#MNGD_TOUSRID").val($(html).find("#"+TOId+RCnt).val())
		$("#MNGD_FRMUSRROLE").val($(html).find("#"+FromRole+RCnt).val())
		$("#MNGD_TOUSRROLE").val($(html).find("#"+ToRole+RCnt).val())
		$("#MNGD_PRCSID").val($("#PrcsID").val())
		$("#MNGD_QRYSTUS").val($(html).find("#"+Status+RCnt).val())
		 $("#RESOLUTION").click();
	 });
	
	$(document).on("click",".ResolutionSend",function() {
		
	if( $("#MNGD_DESC").val()=="")
	{
	 alert("Enter the Comments")
	 return false;
	}
	else
	{
	   var xml = submitdata("SRFDDBfields");
	   var Data=UI_getdata(xml,"","","","","LSW_SPUSHDATATOQRYTBL")
	   if($(Data).find('RESULT').text() != 'SUCCESS')
	   {
		   alert($(Data).find('RESULT').text())
		   return false;
	   }
	   else
	   {
	   $(".ResolutionClose").click();
	    location.reload(true);
	   }
	  }
	});
	
	$(document).on("click",".IQReopen",function() {
		
		if( $("#MNGD_DESC").val()=="")
	      {
	        alert("Enter the Comments")
	        return false;
	     }
		 else
		 {
	      var html=$(this).closest(".DYNROW")
		  var RCnt=$($(this).closest('.DYNROW')).attr('data-row')
          var MainQry=$(this).attr("data-aria").split("|")[0]
		  var FromId=$(this).attr("data-aria").split("|")[1]
		  var FormName=$(this).attr("data-aria").split("|")[2]
		  var FromRole=$(this).attr("data-aria").split("|")[3] 
		  var TOId=$(this).attr("data-aria").split("|")[4] 
		  var ToName=$(this).attr("data-aria").split("|")[5]
		  var ToRole=$(this).attr("data-aria").split("|")[6]
		  var Status=$(this).attr("data-aria").split("|")[7]
		  var AcctType=$(this).attr("data-aria").split("|")[8]
          var URL=$(this).attr("data-aria").split("|")[9]
		  var Comment=$(this).attr("data-aria").split("|")[10]
		  
		  var Status1=$(this).attr("data-aria").split("|")[11]
		  
		$(".REOPENQRY").find("#MNGQ_MNQID").val($("#"+MainQry).val())
		$(".REOPENQRY").find("#MNGQ_ACTNTYP").val('Reopen');
		$(".REOPENQRY").find("#MNGQ_QURYSTATUS").val("Reopen");
		$(".REOPENQRY").find("#MNGQ_FRMUSRID").val($("#"+FromId).val())
		$(".REOPENQRY").find("#MNGQ_FRMUSRNAME").val($("#"+FormName).val())
		$(".REOPENQRY").find("#MNGQ_FRMUSRROLE").val($("#"+FromRole).val())
		$(".REOPENQRY").find("#MNGQ_PRCSID").val($("#PrcsID").val())
		$(".REOPENQRY").find("#MNGQ_TOUSRID").val($("#"+TOId).val());
		$(".REOPENQRY").find("#MNGQ_TOUSRNAME").val($("#"+ToName).val())
		$(".REOPENQRY").find("#MNGQ_TOUSRROLE").val($("#"+ToRole).val())
		$(".REOPENQRY").find("#MNGQ_ATTACHURL").val($("#"+URL).val())
		$(".REOPENQRY").find("#MNGQ_DESC").val($("#"+Comment).val())
			$(".REOPENQRY").find("#MNGQ_QRYSTUS").val($("#"+Status1).val())
		$("#ReopenQryPop").click();
		 }
		
	});
	
	$(document).on("click",".ReopenSend",function() {
	/* var TouserName=	$($("#MNGQ_TOUSRIDI").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	  $("#MNGQ_TOUSRNAME").val(TouserName);
	  var TOUSERROLE =$('.RAISE').find("#MNGQ_TOUSRIDI").val()
	   $("#MNGQ_TOUSRID").val(TOUSERROLE.split("-")[0]);
	  $("#MNGQ_TOUSRROLE").val(TOUSERROLE.split("-")[1]);*/
	
	 var Person=$("input[name='QRYPERSON']:checked").val();
	  if(Person=="To Another Person")
	  {
		  if($("#MNGQ_TOUSRIDREOP").val()=="")
		  {
			  alert('Query To is Mandatory')
			  return false;
		  }
	  }
	 var TouserName =$($("#MNGQ_TOUSRIDREOP").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	
	$(".REOPENQRY").find("#MNGQ_TOUSRNAME").val(TouserName.split("-")[0]);
	  $(".REOPENQRY").find("#MNGQ_TOUSRROLE").val(TouserName.split("-")[1]);
	  
	  var TOUSERID =$(".REOPENQRY").find("#MNGQ_TOUSRIDREOP").val()
	  $(".REOPENQRY").find("#MNGQ_TOUSRID").val(TOUSERID);
	  
	  var Status=$(".REOPENQRY").find("#MNGQ_QRYSTUS").val() 

	  var xml = submitdata("MQRODBfields");
	   var Data=UI_getdata("REOPEN|"+Status,xml,$(".REOPENQRY").find("#MNGQ_MNQID").val(),$("#PrcsID").val()+'|'+$("#LogUsr").val(),$("input[name='QRYPERSON']:checked").val(),"LSW_SPUSHDATATOQRYTBL2")
	   if($(Data).find('RESULT').text() != 'SUCCESS')
	   {
		   alert($(Data).find('RESULT').text())
		   if($(Data).find('RELOAD').text()=="Y")
			  {
				 location.reload(true); 
			  }
		   return false;
	   }
	   else
	   {
	   $(".Reopenclose").click();
	    location.reload(true);
	   }
	  
	});
	
	
	$(document).on("click",".IQQRBTN",function() {
		  
		var RCnt=$($(this).closest('.DYNROW')).attr('data-row')
        var MainQry=$(this).attr("data-aria").split("|")[0]
		  var Type=$(this).attr("data-aria").split("|")[1]
		  var Date=$(this).attr("data-aria").split("|")[2]
		  var FormName=$(this).attr("data-aria").split("|")[3]
		  var ToName=$(this).attr("data-aria").split("|")[4]
		  var QryName=$(this).attr("data-aria").split("|")[5]
		  var Descrip=$(this).attr("data-aria").split("|")[6]
		  var FromId=$(this).attr("data-aria").split("|")[7]
		  var TOId=$(this).attr("data-aria").split("|")[8]   
		  var FromRole=$(this).attr("data-aria").split("|")[9] 
		  var ToRole=$(this).attr("data-aria").split("|")[10] 
		   var Status=$(this).attr("data-aria").split("|")[11] 
		 var html=$(this).closest(".DYNROW")
		$(".REASSIGN").find("#MNGQ_MNQID").val($(html).find("#"+MainQry+RCnt).val())
		$(".REASSIGN").find("#MNGQ_ACTNTYP").val('Re-Assign');
		$(".REASSIGN").find("#MNGQ_QURYSTATUS").val("Re-Assign");
		$(".REASSIGN").find("#MNGQ_FRMUSRNAME").val($(html).find("#"+FormName+RCnt).val())
		$(".REASSIGN").find("#MNGQ_FRMUSRID").val($(html).find("#"+FromId+RCnt).val())
		$(".REASSIGN").find("#MNGQ_FRMUSRROLE").val($(html).find("#"+FromRole+RCnt).val())
		$(".REASSIGN").find("#MNGQ_QRYSTUS").val($(html).find("#"+Status+RCnt).val())
		$(".REASSIGN").find("#MNGQ_PRCSID").val($("#PrcsID").val())

		var Data=UI_getdata($("#PrcsID").val(),$(".REASSIGN").find("#MNGQ_MNQID").val(),"","","","LSW_SGETREASQUERYTO")
		$(".ReassignQry").find("#MNGQ_TOUSRIDRE").empty();
		$(".ReassignQry").find("#MNGQ_TOUSRIDRE").append($(Data).find("RESULT").html());
		$(".ReassignQry").find('#MNGQ_TOUSRIDRE').material_select();
		
	});
	
	$(document).on("click",".ReAssignSend",function() {
	
	  if($("#MNGQ_TOUSRIDRE").val()=="")
	  {
		 alert('Query To is Mandatory')
			  return false;
	  }
	  
	 var TouserName =$($("#MNGQ_TOUSRIDRE").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	
	 $('.REASSIGN').find("#MNGQ_TOUSRNAME").val(TouserName.split("-")[0]);
	  $('.REASSIGN').find("#MNGQ_TOUSRROLE").val(TouserName.split("-")[1]);
	  
	  var TOUSERID =$('.REASSIGN').find("#MNGQ_TOUSRIDRE").val()
	  var Staus =$('.REASSIGN').find("#MNGQ_QRYSTUS").val()
	  $('.REASSIGN').find("#MNGQ_TOUSRID").val(TOUSERID);
	  $(".REASSIGN").find("#MNGQ_PRCSID").val($("#PrcsID").val());
	  
	  var xml = submitdata("MQRSDBfields");
	   var Data=UI_getdata("REASSIGN|"+Staus,xml,$('.REASSIGN').find("#MNGQ_MNQID").val(),$("#PrcsID").val()+'|'+$("#LogUsr").val(),"","LSW_SPUSHDATATOQRYTBL2")
	   if($(Data).find('RESULT').text() != 'SUCCESS')
	   {
		  alert($(Data).find('RESULT').text())
		     if($(Data).find('RELOAD').text()=="Y")
			  {
				 location.reload(true); 
			  }
		   return false;
	   }
	   else
	   {
	   $(".ReAssignclose").click();
	    location.reload(true);
	   }
	  
	});

	
	$(document).on("click",".IQQRLBTN",function() {
		
		if( $("#MNGD_DESC").val()=="")
		{
			alert("Enter the Comments")
			return false;
		}
		else
		{
	    if (confirm("Are you sure to close the query") == true) 
	     {
		   var html=	$(this).closest(".DYNROW")
		    var xml = submitdata_V1("MNGQDBfields",html);
            var Desc=$("#MNGD_DESC").val()
				var Status=$("#MNGD_QRYSTUS").val()
            var URL=$("#MNGD_ATTACHURL").val()
		    var Data=UI_getdata("CLOSED|"+Status,"<Form><Details><MNGD_ATTACHURL>"+URL+"</MNGD_ATTACHURL><MNGD_DESC>"+Desc+"</MNGD_DESC></Details></Form>",$("#MNGD_MNQID").val(),$("#PrcsID").val()+'|'+$("#LogUsr").val(),"","LSW_SPUSHDATATOQRYTBL2")
		     if($(Data).find('RESULT').text() != "SUCCESS")
			 {
			 	alert($(Data).find('RESULT').text())
				 if($(Data).find('RELOAD').text()=="Y")
			  {
				 location.reload(true); 
			  }
			 	return false;
			 }
			 else
			 {
				$(".ResolutionClose").click();
			 	location.reload(true);
			 }
			 
	     }
	 }
	
	})
	
	
	$(document).on("click",".NIQQRLBTN",function() {
		
		if( $("#MNGD_DESC").val()=="")
		{
			alert("Enter the Comments")
			return false;
		}
		else
		{
		if (confirm("Are you sure to resolve the query") == true) 
		{
			
			var html=	$(this).closest(".DYNROW")
			var xml = submitdata_V1("MNGQDBfields",html);
			var Desc=$("#MNGD_DESC").val()
            var URL=$("#MNGD_ATTACHURL").val()
			var Status=$("#MNGD_QRYSTUS").val()
			var Data=UI_getdata("RESOLVED|"+Status,"<Form><Details><MNGD_ATTACHURL>"+URL+"</MNGD_ATTACHURL><MNGD_DESC>"+Desc+"</MNGD_DESC></Details></Form>",$("#MNGD_MNQID").val(),$("#PrcsID").val()+'|'+$("#LogUsr").val(),"","LSW_SPUSHDATATOQRYTBL2")
			  if($(Data).find('RESULT').text() != "SUCCESS")
			 {
			 	alert($(Data).find('RESULT').text())
			if($(Data).find('RELOAD').text()=="Y")
			  {
				 location.reload(true); 
			  }
			 	return false;
			 }
			 else
			 {
				$(".ResolutionClose").click();
			 	location.reload(true);
			 }
		}
	    }
	})
});
	
