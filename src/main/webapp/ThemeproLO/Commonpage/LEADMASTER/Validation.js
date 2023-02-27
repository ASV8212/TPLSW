

function Pindetls(idval,state,city,STDCode)
{
var val=GetPin($(idval).val());

if($(val).find("statename").text()!="")
{
$('#'+state).attr('disabled',true)
$('#'+state).val($(val).find("statename").text());
$('#'+state).next().addClass('active');
}
else
{
$('#'+state).attr('disabled',true)
$('#'+state).val('');
$('#'+state).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Telephone").text()!="")
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val($(val).find("Telephone").text());
$('#'+STDCode).next().addClass('active');
}
else
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val('');
$('#'+STDCode).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Districtname").text()!="")
{
$('#'+city).attr('disabled',true)
$('#'+city).val($(val).find("Districtname").text());
$('#'+city).next().addClass('active');
}
else
{
$('#'+city).attr('disabled',true)
$('#'+city).val('');
$('#'+city).next().removeClass('active');
$(idval).val('');
}
}





function GridControlDIRUSER (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="id'+rowno+'" style="display:none;" value="'+data+'"  name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control LEADID NoSpecialChar RMK form-control ">';			 
			HTML = HTML + '<div class="">'
			HTML = HTML + '<a>'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			//HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 }
	   ,
	   { targets: 5, "render": function ( data, type, row, meta ) {                            
		   var rowno = meta.row;
			var HTML =	''
			var HTML ='<select class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="CheckAction(this)"  id="RXLD_CLOSERTYPE'+rowno+'" name="RXLD_CLOSERTYPE'+rowno+'">';
				HTML = HTML + '<option value="">Select</option>';
				HTML = HTML + '<option value="Convert">Convert</option>';
				HTML = HTML + '<option value="Reject">Reject</option></select>';
				HTML='<span>'+HTML+'</span>';
			var htmldata = $(HTML);
			
				return htmldata[0].outerHTML; 
         } 
		 }
		 ,
		 { targets: 6, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;

	        var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="LEADREMARKPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="REMARK'+rowno+'"  name="REMARK" disabled class="form-control DSVLBL form-control     ">';
       		
       						HTML = HTML + '</span>';

			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=UNIQ_ID'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=UNIQ_ID'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
		 { targets: 7, "render": function ( data, type, row, meta ) {                            
			var rowno = meta.row;	
           
			  
			  var HTML = '<span><div class="HyperControls "><a class="Btxt4 APCDSTATUS BTNHIDE ViewLink" onclick="ViewLeadDt(this)" id="View'+ rowno +'" name="View'+ rowno +'" data-value="View" data-table="TableRR" href="#">View</a></div>';
			   // HTML = HTML + '<span><div class="HyperControls "><a class="Btxt4 APCDSTATUS BTNHIDE EditLink" onclick="ViewLeadDt(this)" id="View'+ rowno +'" name="View'+ rowno +'" data-value="View" data-table="TableRR" href="#">Edit</a></div></span>';
			 
			  if(row[10]=="Save")
			  {
			  HTML = HTML + '<span><div class="HyperControls "><a class="Btxt4 APCDSTATUS BTNHIDE EditLink" onclick="EditLeadDt(this)" id="Edit'+ rowno +'" name="Edit'+ rowno +'" data-value="Edit" data-table="TableRR" href="#">Edit</a></div></span>';
			  }
			  else{
				   HTML = HTML + '<span><div class="HyperControls "><a class="Btxt4 APCDSTATUS BTNHIDE EditLink" style="display:none;" onclick="EditLeadDt(this)" id="Edit'+ rowno +'" name="Edit'+ rowno +'" data-value="Edit" data-table="TableRR" href="#">Edit</a></div></span>';
			 
			  }
			  if(row[5] == "Convert")
			  {
				  HTML = HTML + '<div class="HyperControls"><a class="Btxt4 APCDSTATUS BTNHIDE InitWF SubmLink"  id="Submit'+ rowno +'" name="Submit'+ rowno +'"  data-table="TableRR" href="#">Submit</a></div>';
			  }
			  else{
				  HTML = HTML + '<div class="HyperControls"><a class="Btxt4 APCDSTATUS BTNHIDE InitWF SubmLink" style="display:none;" id="Submit'+ rowno +'" name="Submit'+ rowno +'"  data-table="TableRR" href="#">Submit</a></div>';
			  }
			  if(row[5] == "Reject")
			  {
				  HTML = HTML + '<div class="HyperControls"><a class="Btxt4 APCDSTATUS BTNHIDE  RejLink" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
			  }
			 
			  else{
				  HTML = HTML + '<div class="HyperControls"><a class="Btxt4 APCDSTATUS BTNHIDE  RejLink" style="display:none;" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
			  }
			

			var htmldata = $(HTML);

			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				    data = CURCommaSep(data);
				}
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				return htmldata[0].outerHTML;      	
	         } 
			 },	{ targets: 9, "render": function ( data, type, row, meta ) {                            
	 
			        var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="NXTCOMMDT'+rowno+'"  name="NXTCOMMDT" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';			 
      	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);

      				if ($(htmldata).find('[name=NXTCOMMDT]').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}

      	   			$(htmldata).find('[name=NXTCOMMDT]').attr("value",data);
      	   			return htmldata[0].outerHTML;     
				
	         } 
			 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}



function DshBrdData(id)
{
	var BRID=$(id).attr('name');
	var BrName=$(id).text();
	
	var index=$(id).closest('td').index()
	var colname=$($(id).closest('table').find('thead th')[index]).text();
	$("#BRANCHNAME").val(colname+' :'+BrName);
	//$("#BRANCHNAME").val('BRANCH :'+BrName);
	$("#BRANCHID").val(BRID);
	$("#BRPopup").click();
	 $("#BRViewRpt").trigger('click')

}

function InitNewUser()
{
 $(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID=&PrMs3=NEW")
}
	
function getType()
{
	var k=	$("#URCR_USRTYPE").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#URCR_USRTYPE").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#URCR_USRTYPEI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}

function EXCELDocDwnld(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url=$("#DMY1").val()
    
    var Type=$("#URCR_USRTYPEI").val();
      
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	var Date1=get2date()
	var Name='USER_MANAGEMENT'+'_'+Date1
	
	//RedirectURL =window.location.origin+"/TPLSW/ExcelDwnld?param1=" + $("input[name='USERDETAILS']:checked").val()+ "&param2=&param3=&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SEXPORTUSERDETLS&Prvnt="+$("#Prvnt").val();	
	var param2="USERMNGMNT";
 //var Date1=get2date()
 //var Name="Vendor"+'_'+Date1
 RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3=&param4="+Type+"&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
	
	$("#DocView").attr("src", RedirectURL);
	
	/*var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();*/
	//ScrnFileDownload(RedirectURL);
	//window.open(RedirectURL);
	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	//ajaxindicatorstop();
	 $(".close").click();	    	
}

function UploadData(id)

 {
 	
 		//var s=$(id).val()
		var s= $(id).closest('div').find('input[type="file"]').val()
 var lastIndex = s.lastIndexOf(".")
 var s2 = s.substring(lastIndex + 1); 


 if(s2!='xlsx')
 {
 //alertify.alert('Invalid File Format');
alert('Invalid File Format');
 $(id).closest('div').find('input[type="file"]').val('');
 return;	
 }

 	var fd = new FormData();
 	file_data = $('input[type="file"]')[0].files;
 	  fd.append("file_"+"1", file_data[0]);
 	  
 	  var name=file_data[0].name.split('.')[0];
 	  var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	  $("#PrcsID").attr('value',$(op).find("VR").text())
 	var   param1=$(op).find("VR").text();
 	var   param2="SCF_SEXCELMULTIUPLOADDATA";
 	var   param3="LSW_TDSACNCTRVNDR";
 	
 		$.ajax({
 			url:"/TPLSW/ExcelMultiDynmcUpld?param1="+param1+"&param2="+param2+"&param3="+param3+"&param4=&param5=&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
 			data :  fd,
 			async:false,
 	        contentType: false,
 	        processData: false,
 	        type: 'POST',
 	        success: function (xml1) {

 	        	alert(xml1);
 				if(xml1=='Success')
 				{
 				$(id).closest('div').find('input[type="file"]').val('');
				var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSRVALIDATION")
			var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
				var VENDORDATAINSERT=UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSRUPLOADGRIDVALID")	
 				$(".UploadPageData").show();
			    $(".UserPage").hide();
				var Sheet="";
				if($("#PrMs6").val()!="")
				{
					Sheet=$("#PrMs6").val()
				}
				else
				{
					Sheet="SheetI"
				}
			    FncallMultiPagingGrd(this,'Table4',{spname:'LSW_SGETUPLDINVLDUSRDATA',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:Sheet,MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','IVLDUSRDATA');
		   	    
				var xml=UI_getdata($("#PrcsID").val(),Sheet,"","","","LSW_SGETUSRUPLDCNT")
			
			$("#SuccessCnt").text($(xml).find('SUCCESSCNT').text())
			$("#FailedCnt").text($(xml).find('FAILEDCNT').text())
			$("#CntStatus").val($(xml).find('STATUS').text())
			oTable = $('#Table4').DataTable();
		      $('#SearchTable4').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		   })
			}
		   else
			{ 
 		//	var BulkInsert=	UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSERBULKDATAINSERT")

           // var BulkInsert=	UI_getdata($(op).find("VR").text(),"","","","","LSW_SUSERBULKDATAINSERT")	
			//var BulkInsertRST=$(BulkInsert).find('RESULT').text()
			
				if(BulkInsertRST != '')
						{
						  
						  var Alert2=''
								var nameArr = BulkInsertRST.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;
						   
						   
						}
						else
						{
							alert ("Document Upload SucesssFully")
						}		
 				}
				}
 				else
 				{
 				alert("Upload Failed");
 				$(id).closest('div').find('input[type="file"]').val('');
 return;	
 				}
 	  
 	        },

 	    });
 }
 
 
function GridControlIVLDUSRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},

    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}


function USRDATAINSERT()
{
	if($("#CntStatus").val() == "Y")
	{
	if (confirm("Are you sure,Process with successfully entries only") == true) {
	var SUSRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$('#LogUsr').val(),"","","","LSW_SUSERBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/DirUserMST"); 
	}
	}
else
   {
	var SUSRBULKDATAINSERT=UI_getdata($('#PrcsID').val(),$('#LogUsr').val(),"","","","LSW_SUSERBULKDATAINSERT")	
	$(location).attr('href',window.location.origin + "/TPLSW/DirUserMST"); 
   }	
}

function ShowImportPopUp()
{
	$(".UploadPageData").hide();
	$("#USERIMPORT").click();
}

function FormatEXCELDocDwnld(id)
{

var IOP=LoadFrmXML("RS006");
var RedirectURL="";
var url= $("#DMY1").val()
var Name='USERCONFIG'
var param2="USERFORMAT";

RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#VENDORTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
$("#DocView").attr("src", RedirectURL);
    	
}

function ViewLeadDt(Event)
{
	var LeadID=$(Event).closest('.tbody tr').find('.LEADID').val()   //$(Event).closest('.tbodytr').find('.LEADID').val();
    $(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID="+LeadID+"&PrMs3=VIEW")
}
function EditLeadDt(Event)
{
	var LeadID=$(Event).closest('.tbody tr').find('.LEADID').val()   //$(Event).closest('.tbodytr').find('.LEADID').val();
    $(location).attr('href',window.location.origin + "/TPLSW/ManageLead?PrcsID="+LeadID+"&PrMs3=EDIT")
}


function CheckAction(Event)
{
	var Value=$(Event).val().replace(/,/g,'');
		  if(Value=="Convert")
		  {
			$(Event).closest('tbody tr').find('img').hide();
			$(Event).closest('tbody tr').find('.ViewLink').hide();
			$(Event).closest('tbody tr').find('.RejLink').hide();
			$(Event).closest('tbody tr').find('.SubmLink').show();
			
			//$($(Event).closest('tbody tr').find('td')[8]).find('span').css("display", "block");
			//$("#"+$($($(Event).closest('td').nextAll().eq(5)).find('.LPDSRELA')[1]).attr('id')).show();	

		  }
		  else if(Value == "")
		  {
			$(Event).closest('tbody tr').find('img').show();
			$(Event).closest('tbody tr').find('.ViewLink').show();
			$(Event).closest('tbody tr').find('.SubmLink').hide();
			$(Event).closest('tbody tr').find('.RejLink').hide();
			
		  }
		  else if(Value == "Reject")
		  {
			$(Event).closest('tbody tr').find('img').show();
			$(Event).closest('tbody tr').find('.ViewLink').hide();
			$(Event).closest('tbody tr').find('.SubmLink').hide();
			$(Event).closest('tbody tr').find('.RejLink').show();
			
		  }
}

function FncallMultiPagingGrd_1(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
  var popTable;
  sessionStorage.setItem('SessionMICRCODE', '0');
  //    $("#popup").dialog("open");
//ajaxindicatorstart("Loading.. Please wait");
 var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
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
        	  handlejsonMultiPagingGrd_1(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%").replace(/XXSLXX/g,"/")),fnname,control1, hdncolumn, enablecontrol,par);
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

function handlejsonMultiPagingGrd_1(result,TableID, curcontl, hdncolumn, enablecontrol,par) {

 var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
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
        	  
        	if (enablecontrol == "LEADINBOX")
      {
    		popTableModPageGrid1=  GridControlDIRUSER (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
			
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
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  //$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
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


        }
  }

function LEADREMARKPOPUP(Evnt){
	$("#LEADREMARKPOP").click();
	$("#MNGD_DESC").val("");
	$("#LEADID").val("");
	$(".LEADREMARKPOPDIV").empty();
	$("#LEADID").val($($(Evnt).closest("tr").find("td")[0]).find('input').val());
	LoadMultiDataQuery_V1("",$($(Evnt).closest("tr").find("td")[0]).find('input').val()+'|'+$("#LogUsr").val(),"","LEADREMARKPOPDIV","MQMRDBfields","LSW_SFETCHLEADDATA");
	
}