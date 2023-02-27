function getPrdVal()
{

var PrdType = UI_getdata("ProductID",$("#VERTICAL").val(),"","","","LSW_SGETPRODVAL");

	$("#PrdName").html("")
	$("#PrdName").append($(PrdType).find("RESULT").html());
}

function addMonths() {
    	 
    var d=new Date();
        var dat=d.getDate();
        var mon=d.getMonth();
        var year=d.getFullYear();
        var todayDate = dat+"/"+mon+"/"+year;

 var date = new Date();
date.setDate(date.getDate() - 60);
var Month=date.getMonth()+1

var futDate=date.getDate() + "/" + Month + "/" + date.getFullYear();
    	 
  $("#FromDate").val(futDate)
} 
 
 function GridControlENQUIRTYTAB (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			
		   if(row[16]=="InitWF1")
			   {
			   var rowno = meta.row;	
				var HTML =	'<span class="InitWFview"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'"  name="APPLNO" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			   }
		   else{
			   var rowno = meta.row;	
			   var HTML =	'<span class="">'+data;
			   HTML = HTML + '</span>'; 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
		   }
			     		
				
	         } 
			 },
			 
			  { targets: 5, "render": function ( data, type, row, meta ) {                            
			
		  if(row[16]=="InitWF1")
			   {
		 
		 	 var rowno = meta.row;	 
						var HTML =	'<span>' + CURCommaSep(data); 			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						
							return htmldata[0].outerHTML;   
		 
			   }
				
	         } 
			 },
			 
			 { targets: 9, "render": function ( data, type, row, meta ) {                            
			
		  if(row[16]=="InitWF1")
			   {
		 
		 var dy = "";
		 
		 if (data == "1")
		 {
			 dy = data + " Day";
		 }
		 else if (data=="0")
		 {
			 dy = "Today";
		 }
		 else
		 {
			dy = data + " Days";
		 }
		 
		 
		  var Clr = "";
		 
		 if (data == "Today")
		 {
		 
		Clr="Btxt28";
		 
		 }
		 else if (parseInt(data) >= 10 )
		 {
			 Clr="Btxt29";
		 }
		 else
		 {
			
			Clr="Btxt28";
			
		 }
		 	 var rowno = meta.row;	 
						var HTML =	'<span class="'+Clr+'">' + dy; 			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						
							return htmldata[0].outerHTML;   
		 
			   }
				
	         } 
			 }
	        	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	  return popTableModPageGrid1;
 }
 
function ClearVal()
{
	$(".ClearField").val('');
	$(".ClearFielddrop").val('');
	$(".ClearFielddrop").material_select('destroy');
	$(".ClearFielddrop").material_select();
	FncallMyAppl(this,'Table3',{spname:'LSW_SENQUIRYVIEWTAB',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:'Loan|'+$('#FromDate').val()+'|'+$('#ToDate').val()+'|||||||'+$('#VERTICAL').val(),MnuId:'Load'},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3,10','ENQUIRTYTAB');
}