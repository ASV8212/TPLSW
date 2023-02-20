function AccntOnChng(){
	var op = UI_getdata($("#PrcsID").val(),$("#AEND_ACCNTNO").val(),"","","","LSW_SGETACCNTNO1");
	$("#AEND_BANKNAME").val($($(op).find("BNKNAME")[0]).text());
	$('#AEND_BANKNAME').next().addClass('active');
	$("#AEND_ACCNTHLDRNAME").val($($(op).find("ACCTHOLDRNAME")[0]).text());
	$('#AEND_ACCNTHLDRNAME').next().addClass('active');
}


function GentrateSancLetter()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()

    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT088")+"&__format=pdf&Param1="+PrcsId+"&__filename=Sanctionletter_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function getRECOMND()
{   

	    var xml=UI_getdata($("#PrcsID").val(),$("#DMY6").val(),$("#DMY3").val().split('|')[9],"","","LSW_SGETRECOMND");
	   // $("#RECMTO").empty();
	   // $("#RECMTO").append($(xml).find("RESULT").html());
       // $("#RECMTO").material_select(); 
	    $("#FRWDDRPDWN").val($(xml).find("FRWDRESULT").html());
	    $("#RECMDDRPDWN").val($(xml).find("RECMDRESULT").html());
		$("#HIDNLVL").val($(xml).find("MXDEVLVL").text());

}

function PopFldToDrpDwn(Evnt){
	if(Evnt.textContent=="Forward"){
		$("#RECMTO").empty();
		$("#RECMTO").append($("#FRWDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
		$("#RECMTO").material_select(); 
	}
	else if(Evnt.textContent=="Recommend"){
		$("#RECMTO").empty();
		$("#RECMTO").append($("#RECMDDRPDWN").val());
		$("#RECMTO").material_select('destroy');
		$("#RECMTO").material_select(); 
	}
}


function PushDatatoApprTbl(){
	var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
    var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><CRNTLVL>"+$("#DMY6").val()+"</CRNTLVL><ActionTaken>"+$("#ACTIONTAKEN").val()+"</ActionTaken><Remarks>"+$("#RDESC").val()+"</Remarks><PrcsID>"+$("#PrcsID").val()+"</PrcsID><LVL>"+$("#RECMTO").val().split('-')[0]+"</LVL><TOUSRID>"+$("#RECMTO").val().split('-')[1]+"</TOUSRID><GRP>"+$("#RECMTO option:selected").text().split('-')[0]+"</GRP><ACTVYID>"+$("#ActvID").val()+"</ACTVYID>"
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: xml, param2: "", param3: "", param4: "", param5: "",spname: "LSW_SPushDatatoApprTbl",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			//ajaxindicatorstop();
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			window.alert(LoadFrmXML("V0126"));
		OP="Fail";
		//ajaxindicatorstop();
    }
                          
       
   });     
  // ajaxindicatorstop();
   return OP;
}


function PushDatatoApprTbl1(){
	var OP="";
    var Token=$(window.parent.parent.document).find("#Prvnt").val();
    var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><CRNTLVL>"+$("#DMY6").val()+"</CRNTLVL><ActionTaken>"+$("#ACTIONTAKEN").val()+"</ActionTaken><Remarks>"+$("#RDESC").val()+"</Remarks><PrcsID>"+$("#PrcsID").val()+"</PrcsID><LVL></LVL><TOUSRID></TOUSRID><GRP></GRP><ACTVYID>"+$("#ActvID").val()+"</ACTVYID>"
   $.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: xml, param2: "", param3: "", param4: "", param5: "",spname: "LSW_SPushDatatoApprTbl",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			//ajaxindicatorstop();
    },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			window.alert(LoadFrmXML("V0126"));
		OP="Fail";
		//ajaxindicatorstop();
    }
                          
       
   });     
  // ajaxindicatorstop();
   return OP;
}

function GrdDocDwnld(evnt,row)
{	
	var IOP=LoadFrmXML("RS006");
	var Path=window.location.origin
	IOP=Path+IOP
	
	var PDFID = $(evnt).attr("data-view").split("|")[0]
	var RPTID = $(evnt).attr("data-view").split("|")[1]
	var PDFval=$("#"+RPTID+row).val()
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
		  var URL=$("#"+PDFID+row).val()
		  if (URL =="")
		    {
			  alert("No Report is available to view");
			  return false;
		    }
			else
			{
			  var CINBILURL=IOP+URL
		      window.open(CINBILURL);
			}
	  }
	else
	  {
		var URL=$("#"+PDFID+row).val()
	    var URLVal=URL.split("/g\/g")[0]
	    var Curl= $("#DMY1").val()
		  if (URL =="")
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


function GentrateApprNote()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT085")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Scheme+"&__filename=ApproveNote-"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function GentrateCAM()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
	

    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT039")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+Scheme+"&__filename=CAM_"+$("#DMY7").val().split("|")[7]+".pdf";
	
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