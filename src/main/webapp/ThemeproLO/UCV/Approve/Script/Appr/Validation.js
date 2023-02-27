function AccntOnChng(){
	var op = UI_getdata($("#PrcsID").val(),$("#AEND_ACCNTNO").val(),"","","","LSW_SGETACCNTNO1");
	$("#AEND_BANKNAME").val($($(op).find("BNKNAME")[0]).text());
	$('#AEND_BANKNAME').next().addClass('active');
	$("#AEND_ACCNTHLDRNAME").val($($(op).find("ACCTHOLDRNAME")[0]).text());
	$('#AEND_ACCNTHLDRNAME').next().addClass('active');
}


function GentrateSancLetter()
{
	
	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSANCTREPORT");
var RPTURL=  $(op).find("RPTURL").text()
	
	
	
	var IOP=window.location.origin;
	var PrcsId=$("#DMY7").val().split("|")[7]
	
	var LonType=$("#DMY7").val().split("|")[0]
	LonType=LonType.replace('%','')

   // ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+RPTURL+"&__format=pdf&param1="+PrcsId+"&__filename=Sanctionletter_"+$("#DMY7").val().split("|")[7]+".pdf";
	
/*	if($("#DMY7").val().split('|')[8]=="HE02")
	{
		if($("#DMY7").val().split('|')[0]=="Existing Loans")
		{
          var flname = IOP+LoadFrmXML("RT0100")+"&__format=pdf&Param1="+PrcsId+"&__filename=Sanctionletter_"+$("#DMY7").val().split("|")[7]+".pdf";
		}
		else
		{
		  
		   var flname = IOP+LoadFrmXML("RT0102")+"&__format=pdf&Param1="+PrcsId+"&Param2="+LonType+"&__filename=Sanctionletter_"+$("#DMY7").val().split("|")[7]+".pdf";
		}
	}
	else
	{
	   var flname = IOP+LoadFrmXML("RT088")+"&__format=pdf&Param1="+PrcsId+"&__filename=Sanctionletter_"+$("#DMY7").val().split("|")[7]+".pdf";
	} */
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function getRECOMND()
{   

	    var xml=UI_getdata($("#PrcsID").val(),$("#DMY6").val(),$("#DMY3").val().split('|')[9],$("#LogUsr").val(),"","LSW_SGETRECOMND");
	   // $("#RECMTO").empty();
	   // $("#RECMTO").append($(xml).find("RESULT").html());
       // $("#RECMTO").material_select(); 
	    $("#FRWDDRPDWN").val($(xml).find("FRWDRESULT").html());
	    $("#RECMDDRPDWN").val($(xml).find("RECMDRESULT").html());
		$("#APPRVRECMDDRPDWN").val($(xml).find("APPRVRECMDRESULT").html());
		$("#HIDNLVL").val($(xml).find("MXDEVLVL").text());

}

function PopFldToDrpDwn(Evnt){
	if(Evnt.textContent=="Forward" || Evnt.textContent=="Forward and Recommend"){
		$("#RECMTO").empty();
		$("#RECMTO").append($("#FRWDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
		
		var Level=$("#RECMTO").find('option').last().attr("value")
		Level=Level.replace('L','');
		var MaxLevel=$("#DMY6").val();
			  MaxLevel= MaxLevel.replace('L','')
		if(parseInt(Level)==parseInt(MaxLevel))
		{
			//alert('The file can not be Forwarded, as the file is in higher authority. Kindly Approve the case to process further');
			//return false;
		}
		else
		{
		  MaxLevel= parseInt(MaxLevel)+parseInt(1);
	      $("#RECMTO").val('L'+MaxLevel)
		}
		$("#RECMTO").material_select(); 
	}
	else if(Evnt.textContent=="Recommend"){
		$("#RECMTO").empty();
		$("#RECMTO").append($("#RECMDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
		$("#RECMTO").material_select(); 
	}
	else if(Evnt.textContent=="Approval Query"){
		$("#RECMTO").empty();
		$("#RECMTO").append($("#FRWDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
		$("#RECMTO").material_select(); 
	}
	else if(Evnt.textContent=="Approve and Recommend"){
		$("#RECMTO").empty();
		$("#RECMTO").append($("#APPRVRECMDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
		$("#RECMTO").material_select(); 
	}
	else if(Evnt.textContent=="Send Back")
	{
		$("#RECMTO").empty();
		$("#RECMTO").append($("#APPRVRECMDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
	    var Level=$("#DMY6").val();
		Level= Level.replace('L','')
		Level= parseInt(Level)-parseInt(1)
		if(Level!="0")
		{
	    $("#RECMTO").val('L'+Level)
		}
	   $("#RECMTO").material_select(); 
	}
}


function PushDatatoApprTbl(){
	var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
	//$("#RDESC").val($(event.srcElement).parent().prev().find('iframe').contents().find("body p").text());
	var RmrkTxt = $(event.srcElement).parent().prev().find('iframe').contents().find("body").text();
	$("#RDESC").val('');
    var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><CRNTLVL>"+$("#DMY6").val()+"</CRNTLVL><ActionTaken>"+$("#ACTIONTAKEN").val()+"</ActionTaken><Remarks>"+$("#RDESC").val()+"</Remarks><PrcsID>"+$("#PrcsID").val()+"</PrcsID><LVL>"+$("#RECMTO").val().split('-')[0]+"</LVL><TOUSRID>"+$("#RECMTO").val().split('-')[1]+"</TOUSRID><GRP>"+$("#RECMTO option:selected").text().split('-')[0]+"</GRP><ACTVYID>"+$("#ActvID").val()+"</ACTVYID>"
	var Remrk = $(event.srcElement).parent().prev().find('iframe').contents().find("body").html();
	if(RmrkTxt==""){
		alert("Kindly fill the Remark");
		return;
	}
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: xml, param2: Remrk, param3: RmrkTxt, param4: "", param5: "",spname: "LSW_SPushDatatoApprTbl",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			if($(OP).find("RESULT").text()=="FAIL")
			{
				alert("Invalid Data");
				return;
			}
			else if($(OP).find("RESULT").text()=="SUCCESS")
			{
				var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),$("#DMY6").val()+'|'+$("#ACTIONTAKEN").val()+'|DEVIATIONS|'+$("#RECMTO").val(),$("#DMY3").val().split('|')[9],"","","LSW_SPCKAPPRWFVARONSBMT ");
				var pattern = /var_/;
				var exists = pattern.test($(op).find("WFVAR").text());
				if(exists) {
				   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
				}
				else{
					alert($(op).find("WFVAR").text());
				}
			}
			else{
				alert("Approve and Recommend Submission Failed");
				return;
			}
			//ajaxindicatorstop();
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			//window.alert(LoadFrmXML("V0126"));
			
			alert("Approve and Recommend Submission Failed");
			return;
			
		
		//ajaxindicatorstop();
    }
                          
       
   });     
  // ajaxindicatorstop();
   return OP;
}


function PushDatatoApprTbl1(){
	var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
	//$("#RDESC").val($(event.srcElement).parent().prev().find('iframe').contents().find("body p").text());
	var RmrkTxt = $(event.srcElement).parent().prev().find('iframe').contents().find("body").text();
	$("#RDESC").val('');
    var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><CRNTLVL>"+$("#DMY6").val()+"</CRNTLVL><ActionTaken>"+$("#ACTIONTAKEN").val()+"</ActionTaken><Remarks>"+$("#RDESC").val()+"</Remarks><PrcsID>"+$("#PrcsID").val()+"</PrcsID><LVL></LVL><TOUSRID></TOUSRID><GRP></GRP><ACTVYID>"+$("#ActvID").val()+"</ACTVYID>"
	var Remrk = $(event.srcElement).parent().prev().find('iframe').contents().find("body").html();
	if(RmrkTxt==""){
		alert("Kindly fill the Remark");
		return;
	}
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: xml, param2: Remrk, param3: RmrkTxt, param4: "", param5: "",spname: "LSW_SPushDatatoApprTbl",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			//ajaxindicatorstop();
			if($(OP).find("RESULT").text()=="FAIL")
			{
				alert("Invalid Data");
				return;
			}
			else if($(OP).find("RESULT").text()=="SUCCESS")
			{
				if($("#ACTIONTAKEN").val()=="Approve"){
					var op_xml = UI_getdata($("#PrcsID").val(),"","","","","LSW_SSTRAIGHTTHROUGHDISB");
					if($(op_xml).find("RESULT").text() == "N"){
					WFComplete ($("#ActvID").val(),"var_rstatus=Sanction&"+$(op_xml).find("STRTHRFLG").text(),"");
					}
					else if($(op_xml).find("RESULT").text() == "Y"){
					var WfStrthr = "var_rstatus=DSanction&"+$(op_xml).find("STRTHRFLG").text()
					WFComplete ($("#ActvID").val(),WfStrthr,"");
					
					var ACTVTY="";
					var OverAllStatus="";
					var WFACTVINIT = "";
					ACTVTY=["OTC","PDD"];
					
					for(var j=0;j<ACTVTY.length;j++)
					{
					var CurntACTVTY=ACTVTY[j];
					WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
					if(OverAllStatus != "" && WFACTVINIT != "Success")
						{
						OverAllStatus="Fail";
						}
					}
			        
			        if(OverAllStatus == "Fail")
					{
					alert("File Assignment Failed");
					}
					}
					else{
						alert("Contact IT, Product ID Not Captured.")
					}
				}
				else if($("#ACTIONTAKEN").val()=="Reject"){
					WFComplete ($("#ActvID").val(),"var_rstatus=Reject","");
				}
			}
			else{
				alert("Approve and Recommend Submission Failed");
				return;
			}
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			//window.alert(LoadFrmXML("V0126"));
		OP="Fail";
		alert("Approve and Recommend Submission Failed");
				return;
		//ajaxindicatorstop();
    }
                          
       
   });     
  // ajaxindicatorstop();
   return OP;
}

function PushDatatoApprTbl2(){
	var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
	//$("#RDESC").val($(event.srcElement).parent().prev().find('iframe').contents().find("body p").text());
	var RmrkTxt = $(event.srcElement).parent().prev().find('iframe').contents().find("body").text();
	$("#RDESC").val('');
    var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><CRNTLVL>"+$("#DMY6").val()+"</CRNTLVL><ActionTaken>"+$("#ACTIONTAKEN").val()+"</ActionTaken><Remarks>"+$("#RDESC").val()+"</Remarks><PrcsID>"+$("#PrcsID").val()+"</PrcsID><LVL></LVL><TOUSRID></TOUSRID><GRP></GRP><ACTVYID>"+$("#ActvID").val()+"</ACTVYID>"
	var Remrk = $(event.srcElement).parent().prev().find('iframe').contents().find("body").html();
	if(RmrkTxt==""){
		alert("Kindly fill the Remark");
		return;
	}
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: xml, param2: Remrk, param3: RmrkTxt, param4: "", param5: "",spname: "LSW_SPUSHDATATOAPPRTBL1ONSB",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			if($(OP).find("RESULT").text()=="FAIL")
			{
				alert("Invalid Data");
				return;
			}
			else if($(OP).find("RESULT").text()=="SUCCESS")
			{
				if($("#RECMTO").val()=="" || $("#RECMTO").val()===null)
				{
				  WFComplete ($("#ActvID").val(),"var_rstatus=SB","");
				}
				else
				{
				var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),$("#DMY6").val()+'|'+$("#ACTIONTAKEN").val()+'|DEVIATIONS|'+$("#RECMTO").val(),$("#DMY3").val().split('|')[9],"","","LSW_SPCKAPPRWFVARONSBMT ");
				var pattern = /var_/;
				var exists = pattern.test($(op).find("WFVAR").text());
				if(exists) {
				   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
				}
				else{
					alert($(op).find("WFVAR").text());
				}
			  }
			}
			else{
				alert("Approve and Recommend Submission Failed");
				return;
			}
			//ajaxindicatorstop();
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			//window.alert(LoadFrmXML("V0126"));
			
			alert("Approve and Recommend Submission Failed");
			return;
			
		
		//ajaxindicatorstop();
    }
                          
       
   });     
  // ajaxindicatorstop();
   return OP;
}

function GrdDocDwnld(evnt,row,UniqId,IdRow)
{	
	var IOP=LoadFrmXML("RS006");
	var Path=window.location.origin
	IOP=Path+IOP
	var IdRow=$("#"+IdRow).val();
	var PDFID = $(evnt).attr("data-view").split("|")[0]
	var RPTID = $(evnt).attr("data-view").split("|")[1]
	//var IdRow = $(evnt).attr("data-view").split("|")[2]
	var PDFval=$("#"+RPTID+row).val()
	
   var xml = UI_getdata($("#PrcsID").val(),$("#"+UniqId).val(),"","","","LSW_SGETVENDORSTATUSCHK")
	
	var Status=$(xml).find('RESULT').text();
	
	if(PDFval=="CAM.pdf")
		{
		   GentrateCAM()
		}
	else if(PDFval=="Approval Note")
		{
		  GentrateApprNote()
		}
	else if(PDFval=="CIBIL Score 1" || PDFval=="CIBIL Score 2")
	   {
		  /* var URL=$("#"+PDFID+row).val()
		  var URLVal=URL.split("/g\/g")[0]
	      var Curl= $("#DMY1").val()
		  if (URL =="")
		    {
			  alert("No Report is available to view");
			  return false;
		    }
		    else if(URL.split("/")[1]=="Attachments")
		    {
		      var CINBILURL=IOP+URL
		      window.open(CINBILURL);
		    }
			else
			{
			  RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + (URL).split("/")[0];
            	$("#DocView").attr("src", RedirectURL);
			} */
			
			GentrateCIBIL(UniqId);
	  }
	else
	  {
		  if(Status=="VENDORCOMPLETED")
		  {
        	   var IOP=window.location.origin;
        		var PrcsId=$("#PrcsID").val()
        		
        	    ajaxindicatorstart("Downloading.. Please wait");
        		
       if(IdRow=="1")
		{
     	var flname = IOP+LoadFrmXML("RT091")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#"+UniqId).val()+"&__filename=TECHNICAL-"+$("#DMY7").val().split("|")[7]+"- Technical Valuation.pdf";
		}
	    else if(IdRow=="2")
	    {
 	     var flname = IOP+LoadFrmXML("RT092")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#"+UniqId).val()+"&__filename=LEGAL-"+$("#DMY7").val().split("|")[7]+"- Legal.pdf";
	    }
	    else if(IdRow=="3")
	    {
 	   var flname = IOP+LoadFrmXML("RT093")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#"+UniqId).val()+"&__filename=RESIDENCE-"+$("#DMY7").val().split("|")[7]+"- FI Residence.pdf";
	    }
	    else if(IdRow=="4")
	    {
 	    var flname = IOP+LoadFrmXML("RT094")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#"+UniqId).val()+"&__filename=OFFICE-"+$("#DMY7").val().split("|")[7]+"- FI Office.pdf";
	    }
        		
        		var link=document.createElement('a');
        			document.body.appendChild(link);
        			link.download=flname;
        				link.href=flname;
        				link.click();
        				ajaxindicatorstop();
		  }
		  else
		  {
		  
		var URL=$("#"+PDFID+row).val()
	    var URLVal=URL.split("/g\/g")[0]
	    var Curl= $("#DMY1").val()
		  if(URL =="")
		    {
			  alert("No Report is available to view");
			  return false;
		    }
		 else
	     	{
			 //RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + (URL).split("/")[0];
	         //$("#DocView").attr("src", RedirectURL);
			 //RedirectURL = Curl.replace("XXDMSIDXX",(URL).split("\\")[0]);
			 // window.open(RedirectURL);
			  
			  RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + (URL).split("\\")[0];
	         $("#DocView").attr("src", RedirectURL); 
		   }
		  }
	  }
}


function GentrateApprNote()
{
	/* var IOP=window.location.origin;
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
			ajaxindicatorstop(); */
			
			var IOP=window.location.origin;
	
	var PrcsId=$("#PrcsID").val()
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var LonType=$("#DMY7").val().split("|")[0]
	LonType=LonType.replace('%','')
	
	var PrcsId=$("#DMY7").val().split("|")[7]
	/*var flname = IOP+LoadFrmXML("RT085")+"&__format=pdf&param1="+PrcsId+"&param2="+Scheme+"&param3="+LonType+"&param4="+$("#DMY7").val().split("|")[8]+"&__filename=ApproveNote-"+$("#DMY7").val().split("|")[7]+".pdf";*/
	var flname = IOP+LoadFrmXML("RT0109")+"&__format=pdf&param1="+PrcsId+"&__filename=CAMUCV_"+$(".FormPageMultiTab li.active").text()+".pdf";
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function GentrateCAM()
{
	/* var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
	

    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT039")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+Scheme+"&@PARAM3="+$("#DMY7").val().split("|")[0]+"&@PARAM4="+$("#DMY7").val().split("|")[8]+"&__filename=CAM_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop(); */
			
			var IOP=window.location.origin;
	var PrcsId=$("#DMY7").val().split("|")[7]
	/*var PrcsId=$("#RCCM_LOANUNIQID").val()*/
	var UniqId=$(".FormPageMultiTab li.active").attr('id');
	var Processid=$("#PrcsID").val()
	var Scheme = UI_getdata(Processid,UniqId,"","","","LSW_SGETSCHEMEID")
	var Schemeid = $(Scheme).find('SCHEME').html()
	

    ajaxindicatorstart("Downloading.. Please wait");
	
	 // if($("#VERTICAL").val()=="UCV")
	 // {
		//var flname = IOP+LoadFrmXML("RT0109")+"&__format=pdf&param1="+PrcsId+"&__filename=CAMUCV_"+$(".FormPageMultiTab li.active").text()+".pdf";
		      var flname = IOP+LoadFrmXML("RT0109")+"&__format=pdf&param1="+PrcsId+"&__format=pdf&param2="+Schemeid+"&__filename=CAM_"+$(".FormPageMultiTab li.active").text()+".pdf";
	
	 // }
	ajaxindicatorstop();
	  
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}		

function GridControlDetailAPPRKYCLIST(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
 	 		 
			var rowno = meta.row;
			
				  var HTML ="";
	    		      HTML = HTML + '<input style="display:none" id="KYCD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(KYCD_UPLOAD'+rowno+',id)" type="file" />';
	    		      HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch"  width="35" height="25">';
	    		      HTML = HTML + '<input type="text" value="'+data+'" id="KYCD_UPLOAD'+rowno+'" hidden="hidden" name="KYCD_UPLOAD'+rowno+'" class="form-control"/>';
	    		      HTML = HTML + '</span>';	
	    		      
			 return HTML;
        } 
		 }, { targets: 6, "render": function ( data, type, row, meta ) {                            
 	 		 
			 var rowno = meta.row;		 
     		var HTML =	'<span><input type="checkbox" class="custom-control-input" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
     		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';			  
     		    
     		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
     		
     		  var htmldata = $(HTML);
    			
    			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    			
 	            return htmldata[0].outerHTML;
     		
     		
     			 return HTML;
	        } 
			 },
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function InitRCU()
{
	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETRCUSTATUS");
	if($(op).find("RESULT_FLG").text() == "SUCCESS")
	{
	var GRP = $(op).find("RESULT_MSG").text().split("|")[0];
	var UNIQid = $(op).find("RESULT_MSG").text().split("|")[1];
	var UNIQid1 = $(op).find("RESULT_MSG").text().split("|")[2];
	var OPXML = UI_getdata(GRP,"","","","","LSW_CHKIRCUGROUP");
    var GRP= $(OPXML).find("RCU").text()
	
	var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+GRP+"&var_INFO1="+GRP+"~"+GRP+"~"+UNIQid+"~"+UNIQid1+"|ADMIN","LSW_SWFACTVINITCALL");	
	if (WFVndACTVINIT1 == "Success")
			{
			var OPXML = UI_getdata(GRP,UNIQid,UNIQid1,"","","LSW_SUPDATEIRCUGROUP");
			alert("RCU - File Assigned");
			return true;
			}
		else
			{
			alert("RCU - Initiation Failed");
			return false;
			}
	}
	else{
		alert($(op).find("RESULT_MSG").text());
		return false;
	}
}


function GentrateCIBIL(UniqId)
{
	
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
		 var Cusid=$("#"+UniqId).val();
	// var Cus = UI_getdata(PrcsId,"","","","","LSW_SGETCIBILCUSID")
	//var Cusid = $(Cus).find('CUSID').html()
	 
  ajaxindicatorstart("Downloading.. Please wait");
	 var flname = IOP+LoadFrmXML("RT0119")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=CibilReport_"+$(".FormPageMultiTab li.active").text()+".pdf";
	   ajaxindicatorstop();
	   
	 var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
			
			}
