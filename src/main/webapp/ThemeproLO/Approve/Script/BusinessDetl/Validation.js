
function GridControlDetailLPDSGRID(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

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

            { targets: 0, "render": function ( data, type, row, meta ) {                            	
                      var rowno = TableID+meta.row;	
                      var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  data-tableid="Table3"" class="DelGridrow" title="Delete" attr-Upd="APAG_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
                         } 
                		 },
            
            {
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="LPDS_NAME' + rowno + '"  name="LPDS_NAME' + rowno + '" maxlength="25" class="form-control GCLR IsAlphaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LPDS_NAME' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LPDS_NAME' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:100px" id="LPDS_SHAREHOLD' + rowno + '" data-field="LPDS_SHAREHOLD'+rowno+'|Percentage" data-item="SH" name="LPDS_SHAREHOLD' + rowno + '" maxlength="5" class="form-control IsNumberFields GCLR IsPercentageFld NoSpecialChar">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=LPDS_SHAREHOLD' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=LPDS_SHAREHOLD' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            { targets: 3, "render": function ( data, type, row, meta ) {                            
	 			
   			 var rowno = meta.row;		 
   		 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="ACTIONY'+rowno+'" name="LPDS_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONY'+rowno+'">Yes</label>';			 
   		 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="ACTIONN'+rowno+'" name="LPDS_BRNIOWNER'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONN'+rowno+'">No</label></span>';			  
   		 		
   		 		var htmldata = $(HTML);
   					
   					$(htmldata).find('[name=LPDS_BRNIOWNER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   					//alert(htmldata[0].outerHTML);
   					
   		        return htmldata[0].outerHTML;   		
   					
   		         } 
   				 },
   				{ targets: 4, "render": function ( data, type, row, meta ) {                            
   		 			
   				 var rowno = meta.row;		 
   			 		var HTML =	'<span><input type="radio" class="custom-control-input GCLR CBSIDBfields" value="Yes" id="STRY'+rowno+'" name="LPDS_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRY'+rowno+'">Yes</label>';			 
   			 		HTML = HTML + '<input type="radio" class="custom-control-input GCLR CBSIDBfields" value="No" id="STRN'+rowno+'" name="LPDS_LONSTRU'+rowno+'"><label class="custom-control custom-control-label" for="STRN'+rowno+'">No</label></span>';			  
   			 		
   			 		var htmldata = $(HTML);
   						
   						$(htmldata).find('[name=LPDS_LONSTRU'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

   						//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
   						//alert(htmldata[0].outerHTML);
   						
   			        return htmldata[0].outerHTML;   		
   						
   			         } 
   					 },
					 { targets: 5, "render": function ( data, type, row, meta ) {                            
   		 			
   				 var rowno = meta.row;       			 
			 
	 		  var HTML ='<span><select class="Gridmdb-select md-form colorful-select dropdown-primary  "  id="LPDS_KYC'+rowno+'" name="LPDS_KYC'+rowno+'">';
	 			HTML = HTML + '<option>--Select--</option>';
	 			HTML = HTML + '<option value="Partner">Partner</option></span>';
				HTML = HTML + '<option value="Director">Director</option></span>';
				HTML = HTML + '<option value="Shareholder">Shareholder</option></span>';
				HTML = HTML + '<option value="Proprietor">Proprietor</option></span>';
				HTML = HTML + '<option value="Other">Other</option></span>';	
			          			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML;   		
   						
   			         } 
   					 }
					 /* ,
					 
                     { targets: 6, "render": function ( data, type, row, meta ) {                            
     							var rowno = meta.row;		 
     					  		var HTML =	'<span><input type="checkbox" class="custom-control-input GCLR" value="'+data+'" name="LPDS_KYC'+rowno+'" id="LPDS_KYC'+rowno+'">';			 
     					  		HTML = HTML + '<label class="custom-control-label GridLabel" for="LPDS_KYC'+rowno+'"></label></span>';			  
     					  		    
     					  		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
     					  		
     					  		var htmldata = $(HTML);
     					 			
     					 			$(htmldata).find('[name=LPDS_KYC'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
     					 			
     						 return htmldata[0].outerHTML;
     					  		
     					  		
     					  			 return HTML;
     	     			    } 
     	     		     } */
        ],
        "fnDrawCallback": function(oSettings) {
        }
    });
}


function GETFIRMDROPDOWNVAL()
{
	var LoanType = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETBRROWERNAME");

	//$("#ABFD_FIRMNAME").html("")
	$("#ABFD_FIRMNAME").append($(LoanType).find("RESULT").html());
	$("#ABFD_FIRMNAME").material_select();
}

function GETSCHEME()
{
	var Scheme = UI_getdata($("#PrcsID").val(),"","","","","LSW_GETELIGSCHEME");

	$("#APFS_SCHEME").val($(Scheme).find('Scheme').text())

}


function GetInduestry(FIRM,CATEGORY,CLASS,EVENT,HTML,CONSTITUTION,CUSTYPE)
{
	
if(EVENT=="Load")	
	  {
	  if($("#ABFD_INDUSCATRY").val() =="Manufacturing")
      {
        $('.ABFD_INDUSCATRY').show()
      }
      else
      {
 	   $('.ABFD_INDUSCATRY').hide()
      }
	  if( $("#ABFD_FIRMNAME").val()=="Others")
		 {
		    $('.OTHFIRM').show()
		    $("#ABFD_CONSTITUTION").attr('disabled',false) 
    		$("#ABFD_CONSTITUTION").material_select();
		 }
	  else
		 {
		  $('.OTHFIRM').hide()
		 }
	}
else
	{
	var FIRMID=$(FIRM).attr('id')
	
	if($("#"+FIRMID).val()=="Others")
		{
		    $("#"+CONSTITUTION).attr('disabled',false) 
		    $("#"+CONSTITUTION).val('')
		    $("#"+CONSTITUTION).material_select("destroy");	
    		$("#"+CONSTITUTION).material_select();
            $("#ABFD_OTHFIRM").val('');
            $("#ABFD_OTHFIRM").next().removeClass('active')
            $('.OTHFIRM').show()
            $("#ABFD_INDUSCATRY").val('');    
		}
	else
		{
         var FIRM1=$("#"+FIRMID).val()
         var CusID=FIRM1.split('-')[0]
         var EMPID=FIRM1.split('-')[1]

        var xml=UI_getdata($("#PrcsID").val(),EMPID,CusID,"","","LSW_SAPPRNOTBUSDETL")
	
      $("#"+CATEGORY).val($(xml).find('ABFD_INDUSCATRY').text())
      $("#"+CONSTITUTION).val($(xml).find('CONSTITUTION').text())
	  $("#"+CUSTYPE).val($(xml).find('CUSTYPE').text())
     
	 if($("#"+CONSTITUTION).val() != "")
	 {
     $("#"+CONSTITUTION).attr('disabled',true) 
     $("#"+CONSTITUTION).closest('.select-dropdown').attr('disabled',true) 
     $("#"+CONSTITUTION).material_select();
	 }
	 else
	 {
	  $("#"+CONSTITUTION).attr('disabled',false) 
      $("#"+CONSTITUTION).closest('.select-dropdown').attr('disabled',false) 
      $("#"+CONSTITUTION).material_select(); 
	 }
      
            $("#ABFD_OTHFIRM").val('');
            $('.OTHFIRM').hide()
    	        if($("#ABFD_INDUSCATRY").val() =="Manufacturing")
                  {
    	            $('.FBCLR').val('')
                    $('.'+CLASS).show()
                  }
                else
                 {
                   $('.FBCLR').val('')
     	           $('.'+CLASS).hide()
                 }
            if($(xml).find('CONSTITUTION').text()=="HUF" || $(xml).find('CONSTITUTION').text()=="Proprietorship" || $(xml).find('CONSTITUTION').text()=="Society"  
			|| $(xml).find('CONSTITUTION').text()=="Trustee"  )
            {
            	$('.PARTNERFARM').hide()		
            }
            else
            	{
            	$('.PARTNERFARM').show()	
            	}
             }
	}	
}


function CheckConsti(FIRMID,CONSTITUTION,EVENT,HTML)
{
	if(EVENT=="Load")
		{
		if($("#ABFD_CONSTITUTION").val() == "Proprietorship" || $("#ABFD_CONSTITUTION").val() == "HUF" || $("#ABFD_CONSTITUTION").val() == "Society" || $("#ABFD_CONSTITUTION").val() == "Trustee")
		{
		  $('.PARTNERFARM').hide() 
		  $(".CONSM").removeClass('ABFDMndtry');
		}
		else
		{
		  $('.PARTNERFARM').show() 
		  $(".CONSM").addClass('ABFDMndtry');
		}
		}
	else
		{
	    var FIRM=$("#"+FIRMID).val()
	    var CusID=FIRM.split('-')[0]
	    var EMPID=FIRM.split('-')[1]
	    
	    var CONSTITUTIONID=$(CONSTITUTION).attr('id')
	    var CONSTITUTIONval=$("#"+CONSTITUTIONID).val()
	//var xml=UI_getdata($("#PrcsID").val(),CusID,"","","","LSW_SGETBusinesFarm")
   // var CONSTITUTION=$(xml).find('CONSTITUTION').text()
	  

     if(CONSTITUTION.value=="Proprietorship" || CONSTITUTION.value=="HUF" || CONSTITUTION.value=="Society" || CONSTITUTION.value=="Trustee")
    	 {
    	     $('.PARTNERFARM').next().find('.GCLR').val('')
    	     $("input[name='"+$($('.PARTNERFARM').next().find('.GCLR')[3]).attr('name')+"']:checked").prop('checked',false)
    	     $("input[name='"+$($('.PARTNERFARM').next().find('.GCLR')[4]).attr('name')+"']:checked").prop('checked',false)
    		 $('.PARTNERFARM').hide() 
		     $(".CONSM").removeClass('ABFDMndtry');
         }
       else
    	 {
    	  $('.PARTNERFARM').next().find('.GCLR').val('')
  	      $("input[name='"+$($('.PARTNERFARM').next().find('.GCLR')[3]).attr('name')+"']:checked").prop('checked',false)
  	      $("input[name='"+$($('.PARTNERFARM').next().find('.GCLR')[4]).attr('name')+"']:checked").prop('checked',false)
    	  $('.PARTNERFARM').show()
          $(".CONSM").addClass('ABFDMndtry');		  
         }	
      } 
}


function getOthname(id,Indus)
{
	var Others=$(id).attr("id");
	$("#"+Indus).val($("#"+Others).val())	
}

$(document).on("change", ".DataToFld1" , function() {

	
		 var Datavalue = $(this).val();
		 var ToFld = $(this).attr("data-change");
		 if(Datavalue=="Others")
		 {
			 $("#"+ToFld).val('')
		 }
		 else
		 {
	        $("#"+ToFld).val($(this).find('option[value="' + Datavalue + '"]').text());
		 }
		
})


function FindConstDropDown()
{
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	
	//$("#CoAppConsti").html("")
	$("#ABFD_CONSTITUTION").append(obj.Constitution);
}

function CheckBFMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  var DocText=$("#"+TableID).find(".tbodytr").text()
	  var RTNVAL="";
	  
	  if(DocText!="No data available in table")
	  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
				 if(j==1)
				 {
					 if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=text]').val()=="")
					 {
					 	RTNVAL = "Name is mandatory in "+HDR;
				            return RTNVAL;
					 }
				 }
				 if(j==3)
				 {
			       if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]:checked').val()!="Yes" &&
				   $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]:checked').val() != "No")
				     {
				       RTNVAL = "Beneficiary Owner is mandatory in "+HDR;
				            return RTNVAL;
	                  } 
			      } 
			 }
		   }
	  }
	  else
	  {
		 RTNVAL = "Beneficiary Owner and Name is mandatory in "+HDR;
		 return RTNVAL; 
	  }
	 return RTNVAL;
}

$(document).on("change", ".SHCalc", function() {

		var LPDSLength = $(this).closest('.tbody').find('[data-item=SH]').length;

	Amount = 0;
	val=0;

	for (j=0;j<LPDSLength;j++)
	{
		  val=$($($("#LPDSTable").find('tbody tr')[j]).find('[data-item=SH]')[0]).val().replace(/,/g,'');
		 
		 if(val==NaN)
		  {
			 val=0 
		  }
		else if(val=="")
		  {
			 val=0  
		  }
		  
	   Amount = parseFloat(Amount) + parseFloat(val);	
 
   }
   
   if((Amount>100)&&($("#ABFD_CONSTITUTION").val()=="Partnership firms"))
	   {
		   $(this).val('');
		   /* $($(this).closest('tbody tr').find('td')[3]).find('span').find('[data-item=BO]')[0].checked = false
		   $($(this).closest('tbody tr').find('td')[3]).find('span').find('[data-item=BO]')[1].checked = false
		   $($(this).closest('tbody tr').find('td')[8]).find('span').find('.LPDSRELA').hide() */
		   alert('The sum of total Shareholding should not be greater than 100%');
		
		 //  $($(this).closest('tbody tr').find('td')[9]).find('span').find('.LPDSRELA').hide()
		   return false;
	   }
	else if((Amount>51)&&($("#ABFD_CONSTITUTION").val()!="Partnership firms"))
	{
	 $(this).val('');
	 alert('The sum of total Shareholding should not be greater than 51%');
	}
   
});

