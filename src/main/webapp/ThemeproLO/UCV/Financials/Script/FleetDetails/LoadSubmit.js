

$(document).ready(function () {
	
	
	
	
	
	
	
	$("#FIMA_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FIMA_CUSNAME").val($(".FormPageMultiTab li.active a div").text())
	
	
	//if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		
	//$("#PFDT_PFNO").val($(".FormPageMultiTab li.active").attr("id"))
		
	//$("#PFDT_PFNO").text($(".PFDT_PFNO").val());
	// GetCustName();
	//("LSW_TLONPFDTLS","PFDT_","PFDTDBfields", $("#PFDT_PFNO").val()+"|PFDT_PFNO");
	//$('#OnlineModal').hide();
	//$('#CheckModal').hide();
		var tbl = "LSW_TFLEETDETLS"
	var prfx ="FLET"
	var DATA ="" 
	
		
/* 		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2]; */

	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
		
		
      


FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);

//ChkFree();
//Ffr();
	
		//
		$("#BTNFLEETSHEET").click();
		
		
		$(document).on("click", ".ADDME", function() {
    	
		//var Level = UI_getdata($("#PrcsID").val(),"","","","","LSW_SMUNDEVILVEL");
	     
		
    	 var TableID = "";
		
	        TableID = "MDTable"


		        var rowCnt = $("#"+TableID).find("tbody tr").length;
		        var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;

		        var HTML="";
		        var table = $("#"+TableID).DataTable();
    		    var rowNode = table
    		    .row.add( [ '', '','', '','','', '', '','','',''] )
    		    .draw()
    		    .node();

    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		var _xmlApprvLVL=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETMANUALDEVLVL")
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
            //$("#AEMD_LEVEL"+[parseInt(NewrowCnt)-1]).append($(Level).find("RESULT").html())			
    		//$($(HTML).find('td')[1]).append($(Level).find("RESULT").html())
            $($(HTML).find('td')[1]).find("option[value='"+$(_xmlApprvLVL).find("ACTLVL").text()+"']").attr("selected","selected");;			
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
			
$(document).on("click", ".AddLPDS", function() {
    	
	
    	var TableID = $(this).attr("data-table");

    var HTML="";

    	
    		var html1 = $($(this).closest(".DYNROW"));

    		var table = $("#"+TableID).DataTable();
    		 
    		var rowNode = table
    		    .row.add( [ '','', '', '','','', '', '','','', '', '', '', '', '','','','','','','','','','','',''] )
    		    .draw()
    		    .node();

    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
    		//$($(HTML).find('td')[6]).text($("#FLET_FIRMCONT").val());			
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

	
		
		$('.FormSave').on('click', function() {
		

		if($(this).text() == "Save & Next")
			{

			var MndtryChk = ChkMandatoryFlds("FLETMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
			var FLET_GRIDF = TxtGridsubmitdata_V1("Table4","FLGR_","FLET_");
		    AssignGridXmltoField("FLET_GRIDF", FLET_GRIDF)
		
		 
	         
			var CHKresult=FormDataToDB(tbl,prfx,$("#FLET_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
	         if(CHKresult == "Fail")
		   		{
		   		  alert("Submission Failed");
		   		   return false;			
		   		}
	         //	FormDataToDB(tbl,prfx,$("#LEVD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			 //$(".FormPageMultiTab li.active").attr("id",$("#RACD_UNIQID").val());
		 	// $(".FormPageMultiTab li.active").attr("title",$("#RACD_UNIQID").val());
			 
			 	
			
		 
		
		 /* 
			if($(this).text() == "Save & Next" && $(this).attr('next-form').split("|")[0]=="TAB" )
			{
				  
				  NXTTABA(this,'TAB');
			}
			else if($(this).text() == "Save & Next" && $(this).attr('next-form').split("|")[0]=="" )
			{
				NXTTAB(this);
			} */
			
			if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
		});
		
		

});	