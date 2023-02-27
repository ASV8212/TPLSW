$(document).ready(function () {

	
	FormDataFromDB("LSW_TDOCUMENTUPLOAD","DCUL_","DCULDBfields", "");
	
	              if(($("#PrMs9").val()=="FormPageTab3"&&$("#PrMs10").val()=="FormMainTab3"))
       				 {
                    $("#HIDDENCOL").val('')
					 }
					 else
					 {
					$("#HIDDENCOL").val('0') 
					 }
					var op= UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHCKDATAEXT");
					 if($(op).find("RESULT").text() == "N")
					 {
					 LoadEsignDoc();
					 }
	 FncallDocChkLst(this,'Table3',{spname:'LSW_SGETDOCUUPLOAD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DOCUPLOAD');


		$('#AddKYCDoc').on('click', function() {
            
			
			if($(this).text() == "Confirm")
		    {
			var MndtryChk = ChkMandatoryFlds("KYCDMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		   }
			
			if ($("#KYCD_DOCATTACHMENT").val() == "")
			{	
		        alert("Upload the documents");
			return false;
			}
			var TableID = "";
			
	
			TableID = "Table3"
			
			
		var rowCnt = $("#"+TableID).find("tbody tr").length;
		var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;
		
		var HTML="";
		
		var atLeastOneChecked=false;
		var checkcount = "";
		if (TableID == "Table2")
			{
		$('[name=CBSI_ProofAs]').each(function() {
	         if ($(this).prop("checked") == true) {
	             atLeastOneChecked = true;
	             
	             checkcount = $('[name=CBSI_ProofAs]').length;
	         }
	         
	     });
			}
		else
			{
			atLeastOneChecked = true;
			checkcount = 1;
			}
		
		if (atLeastOneChecked == true)
			{
		
		for (var j=0;j<checkcount;j++) 
			{

			if ($($('[name=CBSI_ProofAs]')[j]).prop('checked') == true || TableID == "Table3")
				{
			
				var table = $("#"+TableID).DataTable();
				 
				var rowNode = table
				.row.add( [ '', '', '','','', '', '','','', '', '','',''] )
				    .draw()
				    .node();
				

		
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
				$($(HTML).find('td')[0]).find('img').show()
				//$($(HTML).find('td')[1]).text($("#KYCD_DOCNAME").val());
				//$($(HTML).find('td')[2]).text($("#KYCD_DOCID").val());
				$($(HTML).find('td')[1]).find("[type=text]").val($("#KYCD_DOCTYPE").val());
				$($(HTML).find('td')[2]).find("[type=text]").val($("#KYCD_DOCNAME").val());
				$(HTML).addClass("tbodytr");
				$(HTML).find("td").addClass("tbodytrtd");

			if ($("#KYCD_DOCATTACHMENT").val() != "")
			{				

				$($(HTML).find('td')[3]).find("[type=text]").val($("#KYCD_DOCATTACHMENT").val());
         	}
				

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

		
			}
			}
		$("#ADDKYCDOCCLOSE").click();
		$('.FormSave').click();
			}
		else
			{
			alert("Select Any One Proof");
			}
		});
		
		
		$(document).on("click", ".DeleteGridrow", function() {
			
			var r = confirm("Are you sure!! to delete the record");
			if (r == true) {
				var id=$(this).next().val()
			    var xml=UI_getdata(id,"","","","","LSW_SDOCUPLOADDELETE")
			 
			    if(($("#PrMs9").val()=="FormPageTab3"&&$("#PrMs10").val()=="FormMainTab3"))
       				 {
                    $("#HIDDENCOL").val('')
					 }
					 else
					 {
					$("#HIDDENCOL").val('0') 
					 }
					 
					 
			    FncallDocChkLst(this,'Table3',{spname:'LSW_SGETDOCUUPLOAD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DOCUPLOAD');

			} 
				
					})
	
	$('.FormSave').on('click', function() {

	var DCUL_DOCUMNTS = TxtGridsubmitdata_V1("Table3","DULD_","DCUL_");
    AssignGridXmltoField("DCUL_DOCUMNTS", DCUL_DOCUMNTS);
	
	var tbl = $(this).attr("data-aria").split("|")[0];
	var prfx = $(this).attr("data-aria").split("|")[1];
	var DATA = $(this).attr("data-aria").split("|")[2];
	
	var CHKresult=FormDataToDB(tbl,prfx,$("#DCUL_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
	
	if (CHKresult == "Fail")
	{
	  alert("Submission Failed");
	   return false;			
	}
	
		});
	

	
});


