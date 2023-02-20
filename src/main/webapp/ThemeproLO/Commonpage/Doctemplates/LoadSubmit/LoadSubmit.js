$(document).ready(function () {

     $("#HIDDENCOL").val()
	 FncallDocChkLst(this,'Table3',{spname:'LSW_SGETDOCUMTEMPLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentTEMPLATES');


		$('#AddKYCDoc').on('click', function() {
            
			
			if($(this).text() == "Confirm")
		    {
			var MndtryChk = ChkMandatoryFlds("KYCDMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		   }
		   
		   if ($("#KYCD_DOCATTACHMENT").val() == "")
			{	
		    alert("Upload the Documents");
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
				    .row.add( [ '', '', '','','', '', '','','', '', ''] )
				    .draw()
				    .node();
				

		
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
				$($(HTML).find('td')[0]).find('img').show()
				/*$($(HTML).find('td')[1]).text($("#KYCD_DOCNAME").val());
				$($(HTML).find('td')[2]).text($("#KYCD_DOCID").val());
				$($(HTML).find('td')[3]).text($("#KYCD_DATE").val());*/
				$($(HTML).find('td')[1]).find("[type=text]").val($("#KYCD_DOCNAME").val());
				$($(HTML).find('td')[2]).find("[type=text]").val($("#KYCD_DOCID").val());
				$($(HTML).find('td')[3]).find("[type=text]").val($("#KYCD_DATE").val());
				
				$(HTML).addClass("tbodytr");
				$(HTML).find("td").addClass("tbodytrtd");

			if ($("#KYCD_DOCATTACHMENT").val() != "")
			{				

				$($(HTML).find('td')[4]).find("[type=text]").val($("#KYCD_DOCATTACHMENT").val());
         	}
				

				$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
				
				$('#'+TableID+' .Gridmdb-select').material_select();               

				// Calendar

				var $input = $(document).find('.Griddatepicker').pickadate({
				   editable: 'true',
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
			}
		else
			{
			alert("Select Any One Proof");
			}
		});
		
		
	$(document).on("click", ".ViewAttch" , function() {
	//ajaxindicatorstart("Generating, Please wait...");
	
	
	
	var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    $("#PrcsID").val('89543_HomeEqutity_process')
		    if ($(this).next().val().split("\\")[0] != "")
		    	{
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$(this).next().val().split("\\")[0]);
	
	RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $(this).next().val().split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	

		    	}
		    else
	    	{
	    	alert("No Attachments Available to View");
	    //	ajaxindicatorstop();
	    	}
	
	
});


$(".DOCVIEW").click(function()
			{
	var MainActive = $(".FormMainTabs").find("li.active").attr("id");
	var PAGENAME="DoctemplView"
	RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
	$(location).attr('href',encodeURI(RedirectURL));
	
			})
			
	$(document).on("click", ".DeleteGridrow", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	var id=$(this).next().val()
 var xml=UI_getdata(id,"","","","","LSW_SDOCUMNENTDELETE")
 
    $("#HIDDENCOL").val()
	 FncallDocChkLst(this,'Table3',{spname:'LSW_SGETDOCUMTEMPLE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentTEMPLATES');

} 
	
		})
		
	
	$('.FormSave').on('click', function() {

	var KYCOTHRDOCGRID = TxtGridsubmitdata_V1("Table3","OKYD_","UPDC_");
	
			var xml=UI_getdata("","",KYCOTHRDOCGRID,"","","LSW_SINSERTDOCTEMPLATE")
			var RESULT=$(xml).find('Result').html();	

		   if(RESULT=="Success")
			   {
			   alert("Data Saved Sucessfully")
			   // location.reload();
			   }
		});
	
});


