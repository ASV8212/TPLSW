function GridControlDetailMNDTRYPROPGRID  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
		 { targets: 3,
           "render": function(data, type, row, meta) {

               var rowno = meta.row;
               var HTML = '<span><input type="text"  id="AMPI_PRMINCLDGST' + rowno + '"  name="AMPI_PRMINCLDGST' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}



function GridControlDetailADPROPINSRNC  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   { targets: 1,
           "render": function(data, type, row, meta) {

               var rowno = meta.row;
               var HTML = '<span><input type="text"  id="AMPI_PLCYTNR' + rowno + '"  name="AMPI_PLCYTNR' + rowno + '" maxlength="2" class="form-control form-control Tenure IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=AMPI_PLCYTNR' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=AMPI_PLCYTNR' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 },
	   { targets: 2,
           "render": function(data, type, row, meta) {

               var rowno = meta.row;
               var HTML = '<span><input type="text"  id="AMPI_SUMINSRD' + rowno + '"  name="AMPI_SUMINSRD' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=AMPI_SUMINSRD' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=AMPI_SUMINSRD' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 },
		 { targets: 3,
           "render": function(data, type, row, meta) {

               var rowno = meta.row;
               var HTML = '<span><input type="text"  id="AMPI_PRMINCLDGST' + rowno + '"  name="AMPI_PRMINCLDGST' + rowno + '" maxlength="10"  class="form-control form-control  IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 }
				 ,
				 { targets: 4,
		           "render": function(data, type, row, meta) {

		               var rowno = meta.row;
		               var HTML = '<span><input type="text"  id="AMPI_CUSID' + rowno + '"  name="AMPI_CUSID' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields ">';
		               HTML = HTML + '</span>';
		               
		               var htmldata = $(HTML);


		               if ($(htmldata).find('[name=AMPI_CUSID' + rowno + ']').hasClass("IsCURCommaFields")) {
		                   data = CURCommaSep(data);
		               }


		               $(htmldata).find('[name=AMPI_CUSID' + rowno + ']').attr("value", data);


		               return htmldata[0].outerHTML;

		           }
						 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}



function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETPROPDTL")
	var CusName=$(xml).find('RESULT').html();	
	$($('.BankDetail1').find('.DYNROW').last()).find('[name=AMPI_LOCATN]').append(CusName)
	$($('.BankDetail1').find('.DYNROW').last()).find('[name=AMPI_PROD]').val('Standard Fire and Special Perils')
//	$($('.BankDetail1').find('.DYNROW').last()).find('[name=AMPI_SUMINSRD]').val(CURCommaSep($("#DMY3").val().split("|")[3]))
	
	
	//$('#LPDT_PROPOWNER').materialSelect();
    //$('#LPDT_PERSONS').materialSelect();
}


function GetCustomerName1()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
	var CusName=$(xml).find('RESULT').html();	
	$("#ACSP_NOMNYNAME").append(CusName)
	//$('#LPDT_PROPOWNER').materialSelect();
    //$('#LPDT_PERSONS').materialSelect();
}

function GetCustomerName2()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
	var CusName=$(xml).find('RESULT').html();	
	$("#ACHP_NOMINENAME").append(CusName)
	//$('#LPDT_PROPOWNER').materialSelect();
    //$('#LPDT_PERSONS').materialSelect();
}

function GridControlDetailADPROPINSRNC  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
		 { targets: 3,
           "render": function(data, type, row, meta) {

               var rowno = meta.row;
               var HTML = '<span><input type="text"  id="AMPI_PRMINCLDGST' + rowno + '"  name="AMPI_PRMINCLDGST' + rowno + '" maxlength="10" class="form-control form-control  IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}



function GridControlDetailHEALTHCOMBOGRD  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
	   { targets: 1,
           "render": function(data, type, row, meta) {
        	   if(row[0] == "Health Insurance")
				{
               var rowno = meta.row;
             /*  var HTML = '<span><input type="text"  id="AMPI_PLCYTNR' + rowno + '"  name="AMPI_PLCYTNR' + rowno + '" maxlength="2" class="form-control form-control Appcble Tenure IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';*/
               
           	var HTML =    '<span><select class="Gridmdb-select md-form colorful-select Mndtry APPDROPDOWN dropdown-primary" disabled id="AMPI_PLCYTNR'+rowno+'" name="AMPI_PLCYTNR'+rowno+'">';
 			HTML = HTML + '<option value="">Select</option>';
 			HTML = HTML + '<option value="1">1</option>';
 			HTML = HTML + '<option value="2">2</option>';
 			HTML = HTML + '<option value="3">3</option></span>';
               
               
              var htmldata = $(HTML);
 			
 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

          return htmldata[0].outerHTML;  

           }
        	   else
        		   {
        		   
        		   var rowno = meta.row;
                   /*  var HTML = '<span><input type="text"  id="AMPI_PLCYTNR' + rowno + '"  name="AMPI_PLCYTNR' + rowno + '" maxlength="2" class="form-control form-control Appcble Tenure IsNumberFields IsCURCommaFields">';
                     HTML = HTML + '</span>';*/
                     
                 	var HTML =    '<span><select class="Gridmdb-select md-form colorful-select Mndtry APPDROPDOWN dropdown-primary" disabled id="AMPI_PLCYTNR'+rowno+'" name="AMPI_PLCYTNR'+rowno+'">';
       		    	HTML = HTML + '<option value="">Select</option>';
					HTML = HTML + '<option value="1">1</option>';
       			    HTML = HTML + '<option value="5">5</option></span>';
                     
               var htmldata = $(HTML);
 			
 			   $(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

              return htmldata[0].outerHTML;  

        		   
        		   }
           }
				 },
				 { targets: 2,
			           "render": function(data, type, row, meta) {
			        	   if(row[0] == "Health Insurance")
							{
			               var rowno = meta.row;
			             	var HTML =    '<span><select data="AMPI_PRMINCLDGST'+ rowno + '" CNT='+rowno+'  class="Gridmdb-select md-form colorful-select Mndtry ClrPremium APPDROPDOWN dropdown-primary" id="AMPI_SUMINSRD'+rowno+'" name="AMPI_SUMINSRD'+rowno+'">';
		       		    	HTML = HTML + '<option value="">Select</option>';
		       			    HTML = HTML + '<option value="1000000">1000000</option></span>';
		       			    HTML = HTML + '<option value="1500000">1500000</option></span>';
		       			   
			             var htmldata = $(HTML);
 			
 		        	$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                  return htmldata[0].outerHTML;  
						   
							}
			        	   else
			        		   {
			        		   
			        		    var rowno = meta.row;
					               var HTML = '<span><input type="text"  id="AMPI_SUMINSRD' + rowno + '" CNT='+rowno+' data="AMPI_PRMINCLDGST'+rowno+'" name="AMPI_SUMINSRD' + rowno + '" maxlength="15" class="ClrPremium Appcble Mndtry form-control form-control COMSUMINSUR IsNumberFields IsCURCommaFields">';
					               HTML = HTML + '</span>';
					               
					               var htmldata = $(HTML);


					               if ($(htmldata).find('[name=AMPI_SUMINSRD' + rowno + ']').hasClass("IsCURCommaFields")) {
					                   data = CURCommaSep(data);
					               }


					               $(htmldata).find('[name=AMPI_SUMINSRD' + rowno + ']').attr("value", data);


					               return htmldata[0].outerHTML;
			        		   
			        		   }
			        	   
			           }
							 },
		 { targets: 3,
           "render": function(data, type, row, meta) {

               var rowno = meta.row;
               var HTML = '<span><input type="text"  disabled id="AMPI_PRMINCLDGST' + rowno + '"  name="AMPI_PRMINCLDGST' + rowno + '" maxlength="10" class="Appcble form-control form-control PrmGST Appcble IsNumberFields IsCURCommaFields">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=AMPI_PRMINCLDGST' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}




function CompareFROMDATE(XID,YID)
{
	
if(YID.value!='')	
{
if(XID.value!='')	
{	

	var JOIN=$('#'+XID).val()

	var DOB=$('#'+YID).val()

	      date = new Date();
	    var y = date.getFullYear();
	    var JOIN1 = JOIN.split("/");
	    var dd = JOIN1[0];
	    var mm = JOIN1[1];
	    var yy = JOIN1[2];

	var JOINDATE=yy+mm+dd

	    var DOB1 = DOB.split("/");
	    var dd1 = DOB1[0];
	    var mm1 = DOB1[1];
	    var yy1 = DOB1[2];
	    var DOBIRTH=yy1+mm1+dd1
          if(parseInt(DOBIRTH)<parseInt(JOINDATE))
	    	{
	    	 window.alert('Policy Period from date should not greater than To date');
	    	 $('#'+XID).val('')
	    	 $('#'+XID).next().removeClass('active')
              return false;
	    	
             }
}
}
}

function GetPropertyAddr()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETPROPADDRESS")
	var ADDRESS=$(xml).find('RESULT').html();	
//	$("#ALIH_PARTIES").append(CusName)
   $("[name='AMPI_LOCATN']").append(ADDRESS)
	$("[name='AMPI_PRONO']").append(ADDRESS)
	
}



function CheckApplicable(id,Event)
{
	if(Event=="Load")
	{
	  var DATA=["ApproveNote2|"];
	  for (j=0;j<DATA.length;j++){
	    	var ValuationID=DATA[j].split("|")[0];
	    	var row = $("." + ValuationID).find(".DYNROW").length;
	    	for (i=0;i<row;i++){
	    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	    		if($(HTML).find("[name='ACHP_APPCONSIDER']").val() == "No")
	    		{   
                    $(HTML).find('.Applicable').hide()
	    			$(HTML).find('.APPSTA').val('')
	    			$(HTML).find('.Appcble').val('')
                    $(HTML).find('.APPSTA').next().removeClass('active')
	    			$(HTML).find('.APPSTA').removeClass('ACHPMndtry')
                    $(HTML).find('input[type=radio]').prop('checked', false);
					//$(HTML).find('.APPDROPDOWN').val('');	
	    			//$(HTML).find('.APPDROPDOWN').material_select("destroy");	
	    			//$(HTML).find('.APPDROPDOWN').material_select();
	    			//$(HTML).find('.Applradio').removeClass('ACHPMndtry')
                }
	    		else
	         	{
	    			$(HTML).find('.Applicable').show()
	    			$(HTML).find('.APPSTA').addClass('ACHPMndtry')
	    			//$(HTML).find('.Applradio').addClass('ACHPMndtry')
	
                }
	    	}
	      
	  }
	}
	else
	{
		var HTML=$(id).closest('.DYNROW')
		if($(HTML).find("[name='ACHP_APPCONSIDER']").val() == "No")
	    		{  
                   if (confirm("you have not opted for health & Pac click ok to Proceed!!") == true) 
					{			
                    $(HTML).find('.Applicable').hide()
	    			$(HTML).find('.APPSTA').val('')
	    			$(HTML).find('.Appcble').val('')
                    $(HTML).find('.APPSTA').next().removeClass('active')
	    			$(HTML).find('.APPSTA').removeClass('ACHPMndtry')
                    $(HTML).find('input[type=radio]').prop('checked', false);
					//$(HTML).find('.APPDROPDOWN').val('');	
	    			//$(HTML).find('.APPDROPDOWN').material_select("destroy");	
	    			//$(HTML).find('.APPDROPDOWN').material_select();
					$(HTML).find("#HPSave").click()
	    			//$(HTML).find('.Applradio').removeClass('ACHPMndtry')
					}
					else
					{
						$(HTML).find("[name='ACHP_APPCONSIDER']").val('Yes')
	                    $(HTML).find("[name='ACHP_APPCONSIDER'] option:contains('Yes')").attr("selected","selected")
						$(HTML).find("[name='ACHP_APPCONSIDER']").material_select();
						$(HTML).find('.Applicable').show()
	    			    $(HTML).find('.APPSTA').addClass('ACHPMndtry')
					}
                }
	    		else
	         	{
	    			$(HTML).find('.Applicable').show()
	    			$(HTML).find('.APPSTA').addClass('ACHPMndtry')
	    			//$(HTML).find('.Applradio').addClass('ACHPMndtry')
                }
	}
}




function CompareTODATE(XID,YID)
{
	
if(YID.value!='')	
{
if(XID.value!='')	
{	

	var JOIN=$('#'+XID).val()

	var DOB=$('#'+YID).val()

	      date = new Date();
	    var y = date.getFullYear();
	    var JOIN1 = JOIN.split("/");
	    var dd = JOIN1[0];
	    var mm = JOIN1[1];
	    var yy = JOIN1[2];

	var JOINDATE=yy+mm+dd

	    var DOB1 = DOB.split("/");
	    var dd1 = DOB1[0];
	    var mm1 = DOB1[1];
	    var yy1 = DOB1[2];
	    var DOBIRTH=yy1+mm1+dd1
          if(parseInt(DOBIRTH)<parseInt(JOINDATE))
	    	{
	    	 window.alert('Policy Period from date should not greater than To date');
	    	 $('#'+YID).val('')
	    	 $('#'+YID).next().removeClass('active')
              return false;
	    	
             }
}
}
}


function ChkApplicable()
{
	
	 
    var DATA=["BankDetail1|"];

    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		
    		{   
    	//	if($('#CADI_SAMRESIDADDR').is(':checked')==true)
             var Applicable= $(HTML).find("[name='AMPI_PROAPPLICABLE']").is(':checked')
             if(Applicable==true)
            	 {
            	 $(HTML).find('.Applicable').show()
                 }
             else
            	 {
            	 $(HTML).find('.Applicable').hide()
            	// $(HTML).find("[name='AMPI_PLCYTNR']").val('');
            	 $(HTML).find("[name='AMPI_PRMINCLDGST']").val('0');
            	 
            	 }
    		    
    		}
    	}
      }
    
}



function GETINSURERNAME()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETINSCUSNAME")
	var CusName=$(xml).find('RESULT').html();	
	$("#ACSP_INSURERNAME").append(CusName)
	$("#AMPI_INSURERNAME").append(CusName)
}


function GridControlDetailFAMILCOMBOGRD  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
	   { targets: 1,
           "render": function(data, type, row, meta) {
        	   var rowno = meta.row;
               var HTML = '<span><input type="text"   id="HPFA_NAME' + rowno + '"  name="HPFA_NAME' + rowno + '" maxlength="10" class="form-control IsAlphaFields form-control  Appcble  ">';
               HTML = HTML + '</span>';
               
               var htmldata = $(HTML);


               if ($(htmldata).find('[name=HPFA_NAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                   data = CURCommaSep(data);
               }


               $(htmldata).find('[name=HPFA_NAME' + rowno + ']').attr("value", data);


               return htmldata[0].outerHTML;

           }
				 },
				 { targets: 2,
			           "render": function(data, type, row, meta) {
			        	if(row[0] == "Mother" || row[0] == "Father")
						{
			               var rowno = meta.row;
			             	var HTML =    '<span><select class="Gridmdb-select md-form colorful-select   dropdown-primary" disabled id="HPFA_GENDOR'+rowno+'" name="HPFA_GENDOR'+rowno+'">';
		       		    	HTML = HTML + '<option value="">Select</option>';
		       			    HTML = HTML + '<option value="Male">Male</option></span>';
		       			    HTML = HTML + '<option value="Female">Female</option></span>';
						
		       			   
			             var htmldata = $(HTML);
 			
 		        	$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                  return htmldata[0].outerHTML;  
						   
						}
						else
							{
			               var rowno = meta.row;
			             	var HTML =    '<span><select class="Gridmdb-select md-form colorful-select APPDROPDOWN dropdown-primary" id="HPFA_GENDOR'+rowno+'" name="HPFA_GENDOR'+rowno+'">';
		       		    	HTML = HTML + '<option value="">Select</option>';
		       			    HTML = HTML + '<option value="Male">Male</option></span>';
		       			    HTML = HTML + '<option value="Female">Female</option></span>';
						
		       			   
			             var htmldata = $(HTML);
 			
 		        	$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

                  return htmldata[0].outerHTML;  
						   
						}
							
			        	   
			           }
							 },
		 { targets: 3,
           "render": function(data, type, row, meta) {

               	var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="HPFA_DOB'+rowno+'"  name="HPFA_DOB'+rowno+'" maxlength="10" class="form-control Appcble form-control IsNumberFields  ISFutureDateFields ISDatefield ">';			 
      	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);
      	   			

      				if ($(htmldata).find('[name=HPFA_DOB'+rowno+']').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}
      					
      				
      	   			$(htmldata).find('[name=HPFA_DOB'+rowno+']').attr("value",data);

      	   			
      	   			return htmldata[0].outerHTML;   

           }
				 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function Applicablesave(id)
{
	 var Applicable=$(id).closest('.DYNROW').find("[name='AMPI_PROAPPLICABLE']").is(':checked')
     if(Applicable!=true)
    	 {
            $(id).closest('.DYNROW').find('.PIFormSave').click();
			$(id).closest('.DYNROW').find(".RMCDD").val('');
	        $(id).closest('.DYNROW').find('.RMCDD').material_select("destroy");	
	        $(id).closest('.DYNROW').find('.RMCDD').material_select();
    	 }
}

function CheckDocMndtryCombo(TableID,FldClas,HDR)
{
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
          if(j==1){
	          if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[2-j]).find('input[type=text]').val()=="" ||
	           $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[2-j]).find('input[type=text]').val()=="Select"){
			          RTNVAL = "Fill the Policy Tenure In Combo 1";
				    		return RTNVAL;
	              }
                 }
		if(j==2){
	          if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=text]').val()=="" ||
	           $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=text]').val()=="Select")
			   {
			          RTNVAL = "Fill the Sum Insured In Combo 1";
				    		return RTNVAL;
	              }
                 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}

function CheckMDCDetl(id,Event)
{
	if(Event=="Load")
	{
		if($('#ACSP_MNDCGAPPLIC').is(':checked')==false)
		{
	      $("#ACSP_MNDCGAPPLIC").prop("checked", false);
		  $(".MDCD").hide();
		}
		else
		{
			$(".MDCD").show();
		}
		
		var DATA=["BankDetail1|"];

    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		{   
			if($(HTML).find("[name='AMPI_PROAPPLICABLE']").is(':checked')==false)
		         {
					 $(HTML).find("[name='AMPI_PROAPPLICABLE']").prop("checked", false);
            	     $(HTML).find('.Applicable').hide();
                 }
			else
				 {
					  //$(HTML).find("[name='AMPI_PROAPPLICABLE']").prop("checked", true);
					 $(HTML).find('.Applicable').show();
				 } 
    		}
    	}
      }
	}
	else
	{
		if($('#ACSP_MNDCGAPPLIC').is(':checked')==false)
		{
			$(".MDCD").hide();
			var DATA=["BankDetail1|"];

    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		{   
			
					 $(HTML).find("[name='AMPI_PROAPPLICABLE']").prop("checked", false);
            	     $(HTML).find('.Applicable').hide()  
    		}
    	}
      }
	  $(".RMCD").val('');
	  $(".RMCD").next().removeClass('active');
	  $(".RMCDD").val('');
	  $('.RMCDD').material_select("destroy");	
	  $('.RMCDD').material_select();
	  $('input:radio[name=ACSP_GENDR]')[0].checked = false;
	  $('input:radio[name=ACSP_GENDR]')[1].checked = false;
	  $('input:radio[name=ACSP_GENDR]')[2].checked = false;
	  $('.MCFormSave').click();
	  $('.PIFormSave').click();
	  }
		else if($('#ACSP_MNDCGAPPLIC').is(':checked')==true)
		{
			$("#ACSP_MNDCGAPPLIC").prop("checked", true);
		  $(".MDCD").show();
		  var DATA=["BankDetail1|"];

    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		{   
			 $(HTML).find("[name='AMPI_PROAPPLICABLE']").prop("checked", true);
             $(HTML).find('.Applicable').show()	  
    	   }
    	}
      }
		}
	}
}


function CheckGender(Gender,Relation,Event)
{
	if(Event=="Load")
    {
	 var Gend=$(Gender).find("input[name='ACHP_NOMINEGENDR']:checked").val()
	  var Relationship=$(Gender).find("[name='ACHP_NOMINERELTN']").val()
	  var name=$(Gender).find("[name='ACHP_NOMINERELTN']").attr('id')
	   if(Gend=="Male")
	{
	     $(Gender).find("[name='ACHP_NOMINERELTN']").empty();
		 $(Gender).find("[name='ACHP_NOMINERELTN']").append('<option value="" >--Select--</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		 $(Gender).find("[name='ACHP_NOMINERELTN']").material_select();
	}
	else if(Gend=="Female")
	{
		$(Gender).find("[name='ACHP_NOMINERELTN']").empty();
		$(Gender).find("[name='ACHP_NOMINERELTN']").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Other">Other</option>') 
		$(Gender).find("[name='ACHP_NOMINERELTN']").material_select();
	}
	else
	{
		$(Gender).find("[name='ACHP_NOMINERELTN']").empty();
		$(Gender).find("[name='ACHP_NOMINERELTN']").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		$(Gender).find("[name='ACHP_NOMINERELTN']").material_select();
	}
	
	//var optn="<option  value='"+Relationship+"'>" + Relationship + "</option>"
	   // $("#"+ name).append(optn)
		$("#"+name+" option:contains("+Relationship+")").attr("selected","selected")
	
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


function CheckGender1(Event)
{
	if(Event=="Load")
    {
	 var Gend=$("input[name='ACSP_GENDR']:checked").val()
	  var Relationship=$("#ACSP_RELVIDINSR").val()

	   if(Gend=="Male")
	{
	     $("#ACSP_RELVIDINSR").empty();
		 $("#ACSP_RELVIDINSR").append('<option value="" >--Select--</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		 $("#ACSP_RELVIDINSR").material_select();
	}
	else if(Gend=="Female")
	{
		$("#ACSP_RELVIDINSR").empty();
		$("#ACSP_RELVIDINSR").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Other">Other</option>') 
		$("#ACSP_RELVIDINSR").material_select();
	}
	else
	{
		$("#ACSP_RELVIDINSR").empty();
		$("#ACSP_RELVIDINSR").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		$("#ACSP_RELVIDINSR").material_select();
	}
	
	//var optn="<option  value='"+Relationship+"'>" + Relationship + "</option>"
	   // $("#"+ name).append(optn)
		$("#ACSP_RELVIDINSR option:contains("+Relationship+")").attr("selected","selected")
		$("#ACSP_RELVIDINSR").material_select();
	
	}
	else
	{
	  
      var Gender=$("input[name='ACSP_GENDR']:checked").val()

	if(Gender=="Male")
	{
	     $("#ACSP_RELVIDINSR").empty();
		 $("#ACSP_RELVIDINSR").append('<option value="" >--Select--</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		 $("#ACSP_RELVIDINSR").material_select();
	}
	else if(Gender=="Female")
	{
		$("#ACSP_RELVIDINSR").empty();
		$("#ACSP_RELVIDINSR").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Other">Other</option>') 
		$("#ACSP_RELVIDINSR").material_select();
	}
	else
	{
		$("#ACSP_RELVIDINSR").empty();
		$("#ACSP_RELVIDINSR").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		$("#ACSP_RELVIDINSR").material_select();
	}
	}
	
}

function ShowInsurLink(HTML,Type,Evnt)
{	
  if($("#PrMs1").val()=="View")
  {
    var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKFILEDISB")
      if($(xml).find('RESULT').text()=='Y')
        {
		
         if(Evnt=="Load")
           {
		   if(Type=="PolicyProperty")
		   {
			 if($(HTML).find("[name=AMPI_PROFLAG]").val()=="Y")	
		     {
               $(HTML).find(".PolicyProperty").show();
		       $(HTML).find(".PolicyProperty").css('display','block')
		      }
		   }
		
	      if(Type=="HealthPac")
		  {
			if($(HTML).find("[name=ACHP_HPFLAG]").val()=="Y")	
		     {
                $(HTML).find(".HealthPac").show();
		        $(HTML).find(".HealthPac").css('display','block')
		     }
	       }
         }
		}
  }
}

function generatePDF(Cusid,PropId,Type,html,HIT)
{
	
	var CusidVal=$("#"+Cusid).val();

	if(Type=="PolicyProperty")
		  {
			  var PropIdVal=$("#"+PropId).val();
			  var xml=UI_getdata($("#PrcsID").val(),$("#"+PropId).val(),"Property","","","LSW_SGETINSURL");
	                     
		  }
	else if(Type=="HealthPac")
		  {
			 var xml=UI_getdata($("#PrcsID").val(),CusidVal,"HealthPac",HIT,"","LSW_SGETINSURL"); 
		  }
	
	 
	  var URL=$(xml).find('URL').text()
	  var Alert=$(xml).find('ALERT').text()
	  
	  if(URL !="")
	  {
		   if(Type=="PolicyProperty")
		  {
	        var URL=$(xml).find('URL').text()
              window.open(URL)
		  }
		  else if(Type=="HealthPac")
		  {
			  var URL=$(xml).find('URL').text()
				  window.open(URL)
		  }
	  }
	  else if(Alert !="")
	  {
		  alert(Alert);
		  return false;
	  }
	  else
	  {
		  if(Type=="PolicyProperty")
		  {
		  GetPropertyURL(Cusid,PropId)
		  }
		  else if(Type=="HealthPac")
		  {
		  GetHealthPacURL(Cusid,HIT)
		  }
	  }
}


function GetPropertyURL(Cusid,PropId)
 {
	 $(".loader2").show();
   var param1=$("#PrcsID").val()
   var param2=$("#"+Cusid).val();
   var param3=$("#"+PropId).val()+"|View|Property";
   var param4="";
   var param5="";
   var param6="";
   var param7="9";
   var spname1="LSW_SGETTOKENGENDATA";
   var spname2="LSW_SMSINSGETPREMIMDATA";
		var OP = "Success"
		
			$.ajax({
			      url: "/TPLSW/MSInsrncePrmeium",
			      data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,param6: param6,param7: param7,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
                  async: true,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
					  if(xml2=="")
					  {
						  $(".loader2").fadeOut("slow")
						  alert("Proerpty PDF Gentration Failed");
					  }
					  else
					  {
						  $(".loader2").fadeOut("slow")
						  if(xml2.split('|')[1]=="")
						  {
							  alert(xml2.split('|')[2]+'\n\r Property PDF Gentration failed, Property Policy No. -'+xml2.split('|')[0])
						  }
						  else
						  {
					  	 //var xml=UI_getdata($("#PrcsID").val(),$("#"+PropId).val(),"Property","","","LSW_SGETINSURL");
	                     //var URL=$(xml).find('URL').text()
                           window.open(xml2.split('|')[1])
						  }
					  }
			     // alert("Mail Send Successfully");
			      },
			      error: function (xml2)
			      {
			     // alert("Mail Send Failed");
				 alert("Proerpty PDF Gentration Failed");
			        return;
			      }
			  }); 
 }



function GetHealthPacURL(Cusid,HIT)
{
	$(".loader2").show();
   var param1=$("#PrcsID").val()
   var param2=$("#"+Cusid).val();
   var param3="|View|"+HIT;
   var param4="";
   var param5="";
   var param6="";
   var param7="9";
   var spname1="LSW_SGETTOKENGENDATA";
   var spname2="LSW_SMSINSGETPREMIMDATA";
		var OP = "Success"
		
			$.ajax({
			      url: "/TPLSW/MSInsrncePrmeium",
			      data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,param6: param6,param7: param7,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
                  async: true,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
			     // alert("Mail Send Successfully");
				 if(xml2=="")
					  {
						  $(".loader2").fadeOut("slow")
						 alert(HIT+"PDF Gentration Failed"); 
					  }
					  else
					  {
						  $(".loader2").fadeOut("slow")
						  if(xml2.split('|')[1]=="")
						  {
							  alert(xml2.split('|')[2]+'\n\r '+HIT+'PDF Gentration failed, '+HIT+' Policy No. -'+xml2.split('|')[0])
						  }
						  else
						  {
					  	 //var xml=UI_getdata($("#PrcsID").val(),$("#"+PropId).val(),"Property","","","LSW_SGETINSURL");
	                     //var URL=$(xml).find('URL').text()
                           window.open(xml2.split('|')[1])
						  }
						  
					  	 //var xml=UI_getdata($("#PrcsID").val(),$("#"+Cusid).val(),"HealthPac",HIT,"","LSW_SGETINSURL");
	                    // var IOP=LoadFrmXML("RS006");
	                     //var Path=window.location.origin
	                      //   IOP=Path+IOP
						//var URL=$(xml).find('URL').text()
						 //window.open(URL)
					  }
			      },
			      error: function (xml2)
			      {
			      alert(HIT+"PDF Gentration Failed");
			       return;
			      }
			  });

	 
 }


function GetHelthPac(Evnt,TablID,tbllen)
{
	
   var RTNVAL="";	
   var param1=$("#PrcsID").val()
   var param2=$(Evnt).closest('.DYNROW').find("[name=ACHP_CUSID]").val();
   var param3="";
   var param4="";
   var param5="";
   var param6="";
   var param7="1";
   var spname1="LSW_SGETTOKENGENDATA";
   var spname2="LSW_SMSINSGETPREMIMDATA";
		var OP = "Success"
		
			$.ajax({
				
			  url: "/TPLSW/MSInsrncePrmeium",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,param6: param6,param7: param7,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
           async: false,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
					 // alert(xml2);
			    	//  var obj = JSON.parse(xml2)
			    	  if(xml2.split('|')[1]!="")
			    	  {
						  $(".loader2").fadeOut("slow")
			    	  	for(var i = 0;i<tbllen;i++){
   				if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Health Insurance")
				{
   					$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep(xml2.split('|')[1]))
                      alert("Online \n\r Health Insurance Premium Amount Rs."+CURCommaSep(xml2.split('|')[1]))					
   				}
   				else if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Personal Accidental Cover (PAC)")
				{
				     $($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep(xml2.split('|')[2]))
					    alert("Online \n\r Personal Accidental Cover (PAC) Premium Amount Rs."+CURCommaSep(xml2.split('|')[2]))	
   				}
   			}
			    	  }
			    	  else
			    	  {
						  $(".loader2").fadeOut("slow")
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
		 return RTNVAL;
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