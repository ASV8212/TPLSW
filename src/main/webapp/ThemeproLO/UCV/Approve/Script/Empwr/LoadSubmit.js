$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

	//FormDataFromDB("LSW_TFINCLSUMMRY", "APFS_", "APFSDBfields", "");
		FormDataFromDB("LSW_TAPPREMPR", "APEM_", "APEMDBfields", "");
	$('#BTNEMPOWERMNT').click();
    
    $('#BTNMANUEMPOWERMNT').click();
	
		//var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKINSFIRMDT")
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
 RECOMMENDHIDE()

    $(document).on("click", ".FormSave", function() {
		
		  var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
		
		

               var EMPRMNT = TxtGridsubmitdata_V1("Table4","APED_","APEM_");
				AssignGridXmltoField("APEM_EMPRMNT", EMPRMNT)
				var MNUEMPRMNT = TxtGridsubmitdata_SV1("Table5","AEMD_","APEM_");
                    AssignGridXmltoField("APEM_MANEMPRMNT", MNUEMPRMNT)

             var CHKresult=FormDataToDB(tbl, prfx, '');
        	if(CHKresult == "Fail")
				{
				  alert("Submission Failed");
				   return false;			
				}
				
				if ($(this).text() == "Generate Empowerments") {
					
					 $.ajax({
					   url: "/TPLSW/internalBRE",
					   type: 'POST',
					   data: {prcsid:$("#PrcsID").val(),procName:"LSW_SBUSINESSRULESENGINE",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
					   async:false,
					   success: function(stm){  
					   
					   if (stm == "")
					   {
						   alert("Empowerment Failed");
							return false;
					   }
					   else  if(stm == "Success~Success")
						{
						  var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SREFRESHEMPOW");
						 // NXTTAB(this);
							$('#BTNEMPOWERMNT').click();
							$('#BTNMANUEMPOWERMNT').click();
						}
						else
						{
							alert("Empowerment Failed");
							return false;   	
						}  
						},
						 error: function(stm) {
							alert("Empowerment Failed");
							return false; 
						  }
					 });  
				}
				
         if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});
	$(document).on("click", ".ADDME", function() {
    	
		//var Level = UI_getdata($("#PrcsID").val(),"","","","","LSW_SMUNDEVILVEL");
	     
		
    	 var TableID = "";
		
	        TableID = "Table5"


		        var rowCnt = $("#"+TableID).find("tbody tr").length;
		        var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;

		        var HTML="";
		        var table = $("#"+TableID).DataTable();
    		    var rowNode = table
    		    .row.add( [ '', '','', '','','', '', '','',''] )
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