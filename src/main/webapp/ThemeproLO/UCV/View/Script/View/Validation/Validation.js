function GenerateReport(){
	/*var BatchID = $('#QTRA_BatchID').val();
	var IOP=window.location.origin;
	var RedirectURL ="/Birt/frameset?__report=report/CSCF/SCF_FInstrRegisTransaction.rptdesign&__format=html&__pageoverflow=1&__overwrite=false";
	RedirectURL = RedirectURL+"&param1="+BatchID;
	$('#ReportIframe').prop('src', RedirectURL);
	*/
	FncallModPageGridLrgData(this,'Table2',{spname:'SCF_sGetRepayStateGrid',Param:$('#QTRA_BatchID').val(),brid:'',MnuId:''},{0:$(''),1:$('')});
}
//GridRerun
//GridComp
 $(document).on('click', '#GridRerun', function () {
	 
	ajaxindicatorstart("Please wait...");

	var param2 = $(this).closest('tr').find('td')[3].innerHTML;

	$.ajax({

               //url: "/ThemePro_SCF/SCFInstrBatchExec",
               //data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, spname2: "CORE_STACCTCREATION",spname: "SAM_sGetInstrCount" },
			url: "/TestThread/SCFInstrBatchExec",
			data: { param1: "", param2: param2, param3: "200", param4: "", param5: "",spname: "SAM_sGetRepayCount50",spname2: "CORE_STBulkRepaymentPosting" ,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			dataType: "text",
            type: 'POST',
            success: function(data)
			{
				ajaxindicatorstop();
				swal("Repayment", "Submitted Successfully!", "success");
            },
          	failure:function(data)
            {
				ajaxindicatorstop();
				swal("Repayment", "Submission Failed!", "error");
				OP="Fail";
			}
                                  
    });
	ajaxindicatorstop();
 });
 
 function DownloadRpt(){
	 var IOP=window.location.origin;
	 IOP='http://14.192.17.61:4040';
	 if($('#FormAction').val() !="Calender")
	 {
		$.ajax({
		        url:"/TPLSW/GetExclData",
		        type: 'POST',
		        async:false,
		        data: { param1: $('#CpmCd').val(),
	            param2: $('#FormAction').val(),
	            param3:$('#PrcsID').val(),
	            param4: '',
	            param5: '',
				param6: '',
				param7: '',
				param8: '',
				DBSrc:'INTR1',
				FName:"Liability",
	            spname: 'SCF_SFEPLimitListingRpt',
				Prvnt:$(window.parent.parent.document).find("#Prvnt").val()
				},
		        success: function(stm){	
				
				if(stm=='Success')
				{
		        	//alert(stm);
					RedirectURL=IOP+"/LSW_Excel/Liability.xlsx"
					var link = document.createElement("a");
					link.download = 'Liability';
					link.href = RedirectURL;
					 //$('#BTNGenRport').hide();
					 //$('#GenRport').show();
					 //$('#REPF_Format').val('');
					link.click();
					ajaxindicatorstop();
					//rt=stm;
					
				}
				else
				{
				alert(stm);
				return;
				}
		        	
		        },
		        }); 
		 
	 }
	 else{
		 $.ajax({
		        url:"/TPLSW/GetExclData",
		        type: 'POST',
		        async:false,
		        data: { 
				param1: $('#CpmCd').val(),
	            param2: 'All',
	            param3: $('#PrcsID').val()+'|'+$('#PrMs2').val(),
	            param4: '',
	            param5: '',
				param6: '',
				param7: '',
				param8: '',
				DBSrc:'INTR1',
				FName:"Liability",
	            spname: 'SCF_SFEPLimitListingRpt',
				Prvnt:$(window.parent.parent.document).find("#Prvnt").val()
				},
		        success: function(stm){	
				
				if(stm=='Success')
				{
		        	//alert(stm);
					RedirectURL=IOP+"/LSW_Excel/Liability.xlsx"
					var link = document.createElement("a");
					link.download = 'Liability';
					link.href = RedirectURL;
					 //$('#BTNGenRport').hide();
					 //$('#GenRport').show();
					 //$('#REPF_Format').val('');
					link.click();
					ajaxindicatorstop();
					//rt=stm;
					
				}
				else
				{
				alert(stm);
				return;
				}
		        	
		        },
		        });
		 
	 }
	 
 }