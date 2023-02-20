function GridControlDetailUPLDFILECHECK  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	 			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input UCLDDBfields RADIOACTNCHK" value="Yes" data-uniq-type="CAM Checklist"  id="ACTIONY'+rowno+'" name="UCLD_ACTION'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input UCLDDBfields RADIOACTNCHK" value="No" data-uniq-type="CAM Checklist"  id="ACTIONN'+rowno+'" name="UCLD_ACTION'+rowno+'"><label class="custom-control custom-control-label" for="ACTIONN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=UCLD_ACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 },
				 { targets: 3, "render": function ( data, type, row, meta ) {                            
						
						if((row[2]=="")||(row[2]=="Yes"))
							{
							var rowno = meta.row;	 
							var HTML =	'<span><button type="button" style="display:none" id="RaiseQuery'+rowno+'" data-aria="" data-uniq-type="CAM Checklist" data-quey-sec="S05" data-form="PersonalInfo" style="height:15px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
							HTML = HTML + '</span>'; 
							var htmldata = $(HTML);							
							return htmldata[0].outerHTML;  
							}
						else{
							var rowno = meta.row;	 
							var HTML =	'<span><button type="button" id="RaiseQuery'+rowno+'" data-aria="" data-quey-sec="S05" data-uniq-type="CAM Checklist" data-form="PersonalInfo" style="height:15px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
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
 }

/*
function getApplName()
{
	var ApplName=$("#UCLH_APPLNAME").val()
	var PrcsId=$("#PrcsID").val()
	if(ApplName=="")
		{
		  var Scheme=$("#UCLH_SCHEM").val()
		  var xml=UI_getdata(PrcsId,Scheme,"","","","LSW_SGETAPPLPERSDETLS")

		if($(xml).find('Result').text()=="Y")
			{
		     
	       if(Scheme=="S00005")
	   	       {
		        $(".ASCMLIP").show()
		        $(".ANSRTRBS").show()
		       }
     	else if(Scheme=="S00002" || Scheme=="S00007")
		     {
		      $(".ANSRTRBS").hide()
		      $(".ASCMLIP").hide()
		    }
    	else
		   {
		    $(".AINCY").show();
		    $(".ANSRTRBS").show()
		    $(".ASCMLIP").hide()
		   }		
		$("#UCLH_APPLNAME").val($(xml).find('CUSNAME').text())
		$("#UCLH_CUSID").val($(xml).find('CUSID').text())
		}
	}
	else
		{
		 if(Scheme=="S00005")
 	       {
	        $(".ASCMLIP").show()
	        $(".ANSRTRBS").show()
	       }
	else if(Scheme=="S00002" || Scheme=="S00007")
	     {
	      $(".ANSRTRBS").hide()
	      $(".ASCMLIP").hide()
	    }
	else
	   {
	    $(".AINCY").show();
	    $(".ANSRTRBS").show()
	    $(".ASCMLIP").hide()
	   }
  }
}
*/
/*
function SchemeBasedCAM()
{
	var Scheme=$("#UCLH_SCHEM").val()
	
	if($("#FICL_INCCONSID").val()=="true")
	  {
	if(Scheme=="S00005")
		{
		 $(".SCMLIP").show()
		 $(".NSRTRBS").show()
		}
	else if(Scheme=="S00002" || Scheme=="S00007")
		{
		$(".NSRTRBS").hide()
		$(".SCMLIP").hide()
		}
	else
		{
		$(".NSRTRBS").show();
		$(".SCMLIP").hide();
		$(".CINCY").show();
		}
      }
}*/


function getApplName()
{
	var ApplName=$("#UCLH_APPLNAME").val()
	var PrcsId=$("#PrcsID").val()
	var Scheme=$("#UCLH_SCHEM").val()
	if(ApplName=="")
		{
		  var xml=UI_getdata(PrcsId,Scheme,"","","","LSW_SGETAPPLPERSDETLS")

		if($(xml).find('Result').text()=="Y")
			{
			if(Scheme=="S00005")
		       {
	  	        $(".CUSNAME").show()
		        $(".ASCMLIP").show()
		        $(".ANSRTRBS").show()
		        $(".AINCY").show()
		       }
			else if(Scheme=="S00001" || Scheme=="S00006" || Scheme=="S00008")
		       {
		        $(".CUSNAME").show()
		        $(".AINCY").show()
		        $(".ANSRTRBS").show()
		        $(".ASCMLIP").hide()
		       }
		   else if(Scheme=="S00002" || Scheme=="S00004" || Scheme=="S00007")
		     {
			  $(".CUSNAME").show()
		      $(".AINCY").hide()
		      $(".ANSRTRBS").show()
		      $(".ASCMLIP").hide()
		     }
		   else if(Scheme=="S00003")
		     {
			   $(".CUSNAME").show()
			   $(".AINCY").hide();
			   $(".ANSRTRBS").show()
		     }		
		$("#UCLH_APPLNAME").val($(xml).find('RCCM_APPLNAME').text())
		$("#UCLH_CUSID").val($(xml).find('RCCM_CUSID').text())
		}
	}
	else
		{
		if(Scheme=="S00005")
	       {
	        $(".CUSNAME").show()
	        $(".ASCMLIP").show()
	        $(".ANSRTRBS").show()
	        $(".AINCY").show()
	       }
		else if(Scheme=="S00001" || Scheme=="S00006")
	       {
	        $(".CUSNAME").show()
	        $(".AINCY").show()
	        $(".ANSRTRBS").show()
	        $(".ASCMLIP").hide()
	       }
	   else if(Scheme=="S00002" || Scheme=="S00004" || Scheme=="S00007")
	     {
		  $(".CUSNAME").show()
	      $(".AINCY").hide()
	      $(".ANSRTRBS").show()
	      $(".ASCMLIP").hide()
	     }
	   else if(Scheme=="S00003")
	     {
		   $(".CUSNAME").show()
		   $(".AINCY").hide();
		   $(".ANSRTRBS").show()
	     }
      }
}

function SchemeBasedCAM(HTML,id)
{
	var Scheme=$("#UCLH_SCHEM").val()
	var INCConsider=$(HTML).find("#"+id).val()
	if(INCConsider=="true")
	 {
		
	 if($(HTML).find("input[name='FICL_SAMDATE']:checked"). val() == undefined)
	  {
			$(HTML).find('input:radio[name=FICL_SAMDATE]')[1].checked = true;
	  }
	  if($(HTML).find("input[name='FICL_MINLATEST']:checked"). val() == undefined)
	  {
		  $(HTML).find('input:radio[name=FICL_MINLATEST]')[1].checked = true;
	  }
	 if($(HTML).find("input[name='FICL_CARPT']:checked"). val() == undefined)
	  {
		 $(HTML).find('input:radio[name=FICL_CARPT]')[1].checked = true;
	  }
		
		if(Scheme=="S00005")
	    {
		 $(HTML).find(".COCUSNAME").show()
	     $(HTML).find(".SCMLIP").show()
	     $(HTML).find(".NSRTRBS").show()
	     $(HTML).find(".CINCY").show()
	    }
		else if(Scheme=="S00001" || Scheme=="S00006")
	    {
		 $(HTML).find(".COCUSNAME").show()
	     $(HTML).find(".CINCY").show()
	     $(HTML).find(".NSRTRBS").show()
	     $(HTML).find(".SCMLIP").hide()
	    }
	else if(Scheme=="S00002" || Scheme=="S00004" || Scheme=="S00007")
	  {
	   $(HTML).find(".COCUSNAME").show()
	   $(HTML).find(".CINCY").hide()
	   $(HTML).find(".NSRTRBS").show()
	   $(HTML).find(".SCMLIP").hide()
	  }
	else if(Scheme=="S00003")
	  {
		  $(HTML).find(".COCUSNAME").show()
		  $(HTML).find(".CINCY").hide();
		  $(HTML).find(".NSRTRBS").show()
	  }
	    }
}

function HndlPartclr(HTML,id){
	if(HTML != ''){
		if($(HTML).find('input[name="'+id+'"]:checked').val() == "No")
			{
			$(HTML).find('input[name="'+id+'"]').closest('.col-md-3').next().find('button').show();
			}
		else{
			$(HTML).find('input[name="'+id+'"]').closest('.col-md-3').next().find('button').hide();
		}
		
	}
	else{
		if($('input[name="'+id+'"]:checked').val() == "No")
		{
			$('input[name="'+id+'"]').closest('.col-md-3').next().find('button').show();
		}
	else{
		$('input[name="'+id+'"]').closest('.col-md-3').next().find('button').hide();
	}
	}
}

function CheckRadio()
{
	if($("input[name='UCLH_SAMEDATE']:checked"). val() == undefined)
		{
		 $('input:radio[name=UCLH_SAMEDATE]')[1].checked = true;
		}
	if($("input[name='UCLH_APPLACTION']:checked"). val() == undefined)
	  {
		$('input:radio[name=UCLH_APPLACTION]')[1].checked = true;
	  }
	 if($("input[name='UCLH_CARPT']:checked"). val() == undefined)
	  {
	     $('input:radio[name=UCLH_CARPT]')[1].checked = true;
	  }
	  //Credit Change Start
    if($("input[name='UCLH_ITRGAP']:checked"). val() == undefined)
	  {
	    $('input:radio[name=UCLH_ITRGAP]')[1].checked = true;
	  }
     //Credit Change End
}