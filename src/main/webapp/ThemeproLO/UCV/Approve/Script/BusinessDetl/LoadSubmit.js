$(document).ready(function() {


if($("#PrMs3").val()=="FIRM1")
{
	$(".DELBTNTXT").hide();
}
    
       $("#ABFD_FIRMCONT").val($("#PrMs3").val());
	   
	   FindConstDropDown();
	   
	
	   
    /* if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	//$("#ABFD_FIRMCONT").val($(".FormPageMultiTab li.active").attr("id"))
	      $("#ABFD_FIRMCONT").val($("#PrMs6").val());
		}*/
		
	//$("#ABFD_FIRMNAMEVAL").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	RECOMMENDHIDE();
	GETFIRMDROPDOWNVAL();
	
	

	 var DATA = $("#ABFD_FIRMCONT").val()+"|ABFD_FIRMCONT";

	FormDataFromDB("LSW_TAPRBUSNFIRMDETL","ABFD_","ABFDDBfields", DATA);

	CheckConsti("","","Load","")
	GetInduestry("","","PARTNERFARM","Load","","")

	$("#BTNLPDSGRD").click();
   
   $("#processId").val($("#PrcsID").val()+'|'+$("#ABFD_FIRMCONT").val())
   
   
   if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
            DSVLBLEXTEDITER()
        }
    var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETPRODUCTNAME")
    var CROSS=$(xml).find('PRODUCT').text() 
	if($("#VERTICAL")=="UCV")
	{
	if(CROSS=='T316')
	{
	$("#FormPageTab6").show()
	}
	else
	{
	$("#FormPageTab6").hide()
	}
   }
$(document).on("click", ".AddLPDS", function() {
    	
	
    	var TableID = $(this).attr("data-table");

    var HTML="";

    	
    		var html1 = $($(this).closest(".DYNROW"));

    		var table = $("#"+TableID).DataTable();
    		 
    		var rowNode = table
    		    .row.add( [ '', '', '','','', '', '','','', '', '', '', '', '','','','','','',''] )
    		    .draw()
    		    .node();

    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
    		$($(HTML).find('td')[6]).text($("#ABFD_FIRMCONT").val());			
    		//$($(HTML).find('td')[7]).text($(html1).find("[name=EGCD_UNIQUID]").val());
    		
    		// For Data Population in Grid Columns End
    		
    		// Field Initialisation Start
            
    		$(HTML).addClass("tbodytr");
    		$(HTML).find("td").addClass("tbodytrtd");
    		
    		// Dropdown
    		                   
    		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
    		
    		$('#'+TableID+' .Gridmdb-select').material_select();               

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

    		//Field Initialisation End


    });
	
	
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SChkBusinessDetails")
    var BUSINESSDETAILS=$(xml).find('BUSINESSDETAILS').text()
    
    if(BUSINESSDETAILS=="YES")
    	{
    	//$('.BUSINESS').show()
    	//$("#DMY3").val("50000000|20")
        var ReqAmt=$("#DMY3").val().split("|")[3]
    	if(ReqAmt>5000000)
    		{
             $('.RELMND').addClass('ABFDMndtry');
    		}
         }
    else
    	{
    	//$('.BUSINESS').hide()
    	$('.RELMND').removeClass('ABFDMndtry');
        }
	
	
	
    $(document).on("click", ".FormSave", function() {
		
		if( $("#ABFD_FIRMNAME").val()=="Others")
		 {
			 if($("#ABFD_OTHFIRM").val()=="")
			 {
				 alert('Enter the Name of the Firm.')
				 return false;
			 } 
		 }
       
	   if($(this).text()=="Save & Next")
		{
	   var MndtryChk = ChkMandatoryFlds("ABFDMndtry");
               if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields / Document(s)");
                return false;
            }
		}
		if($("#ABFD_FIRMCONT").val() == "")
		{
		var CUSID = UI_getdata("Firm","","Yes","","","Sam_sGetSeqID");
		
		$("#ABFD_FIRMCONT").val($(CUSID).find("Val1").text());
	    }
         // $("#processId").val($("#PrcsID").val()+'|'+$("#ABFD_FIRMCONT").val())
		 
		 if($(this).text()=="Save & Next")
		{
		  var xml=UI_getdata($("#PrcsID").val(),$("#ABFD_FIRMNAME").val().split("-")[0],"","","","LSW_SGETCONS")
         if($(xml).find('CONSTITUTION').text()=="Private Ltd" || $(xml).find('CONSTITUTION').text()=="Partnership firms" || ($("#ABFD_FIRMNAME").val()=="Others" && $("#ABFD_CONSTITUTION").val() =="Private Ltd" || $("#ABFD_CONSTITUTION").val() =="Partnership firms") )
		 {			 
		  BFMndtry = CheckBFMndtry("LPDSTable","Mndtry","LIST OF PARTNERS / DIRECTOR / SHAREHOLDER");
		  
		  if(BFMndtry != "")
			{
			   alert(BFMndtry);
			   return;
			} 
		 }
		}
		 
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

          
				var LPDSTable = TxtGridsubmitdata_V1("LPDSTable","LPDS_","ABFD_");
				     AssignGridXmltoField("ABFD_LPDSGRD", LPDSTable);  

				   $("#cke_ABFD_TEBUSNESSPROG").find(".cke_toolbar").find(".cke_button__save").click()	  
        
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#ABFD_FIRMCONT").val()+"|"+$("#"+DATA).val()+"|" + DATA);
        	if(CHKresult == "Fail")
				{
				  alert("Submission Failed");
				   return false;			
				}
				
		$(".FormPageMultiTab li.active").attr("id",$("#ABFD_FIRMCONT").val());
		$(".FormPageMultiTab li.active").attr("title",$("#ABFD_FIRMCONT").val());
		$(".FormPageMultiTab li.active a div").text($("#ABFD_OTHFIRM").val());
		
		if($(this).text()=="Save & Next")
		{
			//if($(".FormPageMultiTab").find('li.active').next().next().length>0)
			//{
		       NXTTAB(this);
			//}
		}
		
		
    });
});