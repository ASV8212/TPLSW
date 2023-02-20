
function GridControlDetailMonthRpt (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
   
		
		
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
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
 	var   param3="LSW_TCERSAIDOCUPLOAD";
 	
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
					$('#PrcsID').val(param1)
					
					var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),"","","","","LSW_CERSAIVALIDATION")
               //	FncallDocChkLst(this,'Table2',{spname:'LSW_SMonthlyRPT',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$(op).find("VR").text(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MonthRpt')
                 $(id).closest('div').find('input[type="file"]').val('');
				 
				
				 
				$("#BTNMONTH").click();
				
				oTable = $('#Table2').DataTable();
		         $('#SearchTable2').keyup(function(){
		        oTable.search($(this).val()).draw() ;
		       })
	
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
 
 
 
function EXCELDocDwnld(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
         if ($("#RPTTYPE").val()== "")
        {
			alert("Fill the Mandatory Fields");
			return;
		}
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	var Date1=get2date()
	
	if ($("#RPTTYPE").val()== "SALES")
        {
	var Name='Templets_Objectives_SALES'
	var param2="MONTHLYRPTSALES";
	
		}
		
		else
		{
			var Name='Templets_Objectives_CREDIT'
	           var param2="MONTHLYRPTCREDIT";
			
		}
	//RedirectURL =window.location.origin+"/TPLSW/ExcelDwnld?param1=" + $("#VENDORTYPE").val() + "&param2=" + $("input[name='VENDORDETAILS']:checked").val()+"&param3=&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SEXPORTVENDORDETAILS&Prvnt="+$("#Prvnt").val();
	
 //var Date1=get2date()
 //var Name="Vendor"+'_'+Date1
 RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#RPTTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";

	
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

       sleep(3000);
    // await sleep(2000);


//Upload Execl Format

//var Name='Upload_Templets'
//var param2="MONTHYRPTFORMAT";
//RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#RPTTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";


	 
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function EXCELFORMAT(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
	
   

	var Date1=get2date()
	
 var Name='CersaiDownload'
var param2="AGREEMENTNO";

 RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#RPTTYPE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";

	
	$("#DocView").attr("src", RedirectURL);
	
 
	 
}


function EXPORTDETAILS(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
	
       if ($("#EXPT_RPTTYPE").val()== ""||$("#EXPT_ROLE").val()== "")
        {
			alert("Fill the Mandatory Fields");
			return;
		}
	var Date1=get2date()
	
 var Name='Upload_Targets'
var param2="MONTHYRPTEXPORT";

 RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=VENDOREMPL&param2="+param2+"&param3="+$("#EXPT_ROLE").val()+"&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";

	
	$("#DocView").attr("src", RedirectURL);
	
 
	 
}





function GridControlCERSAIDOWNLOAD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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






function GRIDTRIGGER()
{
       $("#BTNMONTH").click();
     oTable = $('#Table2').DataTable();
		         $('#SearchTable2').keyup(function(){
		        oTable.search($(this).val()).draw() ;
		       })
				 
}


function GENERATE_CERSAI()
{
	
	if($("#Table2").find("tbody tr td").text()=="No data available in table")
{
	
	alert('Upload the documents')
	return  
}
  var dt = new Date();
  var dtme= dt.getFullYear()+''+(dt.getMonth()+1)+''+ dt.getDate()+ ''+dt.getHours() + '' + dt.getMinutes() + "" + dt.getSeconds(); 
  var param1=$('#PrcsID').val(); //UNIQUE ID
   
  var param2="";
    var param3="";
    var param4="";
    var param5="";
    var spname="LSW_SCersaiReport";
    var FName="CRS_CERAD_012039_"+dtme;
    var FExtsn="dat";
   
var RedirectURL="";
    RedirectURL=window.location.origin+"/TPLSW/CersaiDwnlod?param1="+param1+"&param2=&param3=&param4=&param5=&FName="+FName+"&FExtsn="+FExtsn+"&spname="+spname;
    ScrnFileDownload(RedirectURL)      
   
}