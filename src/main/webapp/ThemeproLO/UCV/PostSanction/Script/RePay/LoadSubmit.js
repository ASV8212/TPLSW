$(document).ready(function () {
	
	
	$("#PRPM_LOANID").val($(".FormPageMultiTab li.active").attr("id"));
	
	GetCustomerName();
	
	LoadMultiData("",$("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"Repayment","RPBDDBfields","LSW_sGETREPAYBNKDETL");
     
	 var xmlop=UI_getdata($("#PrcsID").val(),$("#PRPM_LOANID").val(),"","","","LSW_SCHECKLOANTY")
	var CusName=$(xmlop).find('RESULT').html();
	$("#PRPM_LOANTY").val(CusName);
	if(CusName=="Bill Discounting" || CusName=="DLOD" || CusName=="Over Draft" || CusName=="WCDL")
	{	
		
		$(".MPDC"). attr('disabled', true);
		//$(".MENACH"). attr('disabled', true);
		/* if(CusName=="DLOD" || CusName=="Over Draft")
		{
		$("#MODEACH").attr('disabled',true);
		$(".MPDC"). attr('disabled', true);
		} */
	}
	
	/*  if($("#VERTICAL").val() == "UCV Eco"){
		 $("#MODENACH"). attr('disabled', false);
	 } */
	 var DATA=["Repayment|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var MemoData=DATA[j].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
	         var HTML = $("." + MemoData).find(".DYNROW")[i];
	        //GetCustomerName(HTML,'Load');
	         GetBnkName(HTML,'Load');
	       }
	     }
		 
	FormDataFromDB("LSW_TPOATREPAY","PRPM_","PRPMDBfields",$("#PRPM_LOANID").val()+"|PRPM_LOANID");
	
	
	var DATA=["Repayment|"];
	 var MemoData=DATA[0].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
	 for (j=0;j<row;j++)
		 {
		 $("#RPBD_BNKDETL"+[j+1]).empty();
		 var PrcsID=$("#PrcsID").val();
		 var val=$("#RPBD_PDCPROVIDE"+[j+1]).val()
	var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var CusName=$(xml).find('RESULT').html();	
	     $("#RPBD_BNKDETL"+[j+1]).append(CusName)
		 var Data=$("#RPBD_BNKDETLVAL"+[j+1]).val()
		 $("#RPBD_BNKDETL option:contains("+Data+")").attr("selected","selected")
	     }
	
	
	//FormDataFromDB("LSW_TPOATREPAY","PRPM_","PRPMDBfields", $("#BKDT_BNKNO").val()+"|BKDT_BNKNO");
	
	var op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"CHK","","","LSW_SREPYBASCDTL");
	  if($(op).find("RESULT").text()=="ALLOW")
		{
		op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SREPYBASCDTL");
		/*var text = op;
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(text,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x[0].childNodes.length ;i++) {
			if(x[0].childNodes[1].childNodes[0]!=undefined)
				{
				$("#"+x[0].childNodes[i].nodeName).val(x[0].childNodes[i].childNodes[0].nodeValue);
				$("#"+x[0].childNodes[i].nodeName).next().addClass('active');
				}
			}*/
		var n = document.getElementsByClassName('APPRBNK');
		
      for (i = 0; i < n.length; i++) 
        {
          name = document.getElementsByClassName('APPRBNK').item(i).id
         
          var val = $(op).find(name).text();
 
          if($("#"+ name).length > 0)
          {
        	  $("#"+ name).val(val); 
        	  $("#"+ name).next().addClass('active');
          } 
        }
		}
		
    if($("#PRPM_EMI").val() == "")
	  {
		$("#PRPM_EMI").val(CURCommaSep($("#DMY3").val().split("|")[6]))
	  }
	
	if($("#PRPM_REPAY").val() == "")
	  {
		$("#PRPM_REPAY").val($("#DMY3").val().split("|")[4])
	  }
	
	/*var DATA=["Repayment|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var MemoData=DATA[j].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
	         var HTML = $("." + MemoData).find(".DYNROW")[i];
	        GetCustomerName(HTML,'Load');
	         GetBnkName(HTML,'Load');
	       }
	}*/
    //$("#BMTD_UNIQNO").val($("#PRPM_ACCNUM").val())
    //$("#RPCD_UNIQNO").val($("#PRPM_ACCNUM").val())
	$("#BTNRPCHQGRD").click();
	
/* 	if($("#DMY7").val().split('|')[11]!="")
	  {
	         if($("#PRPM_URMNNO").val() == "")
				{
	                  var PRCSID = $("#PrcsID").val();
	            $.ajax({
	              url: "/TPLSW/ENACHFETCH",
	              type: 'POST',
	              data: {PRCSID:PRCSID,UID:$("#DMY7").val().split('|')[11],Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
			if(stm == "")
	    		{
					//alert('E-NACH Failed')
					//return false;
				}
             else if (stm.split("|")[0]=="FAILURE" || stm.split("|")[0]=="No Data")
	    		{
                  //alert(stm.split("|")[3])
				  //return false;
				}
				else if (stm.split("|")[0]=="SUCCESS")
	    		{
					if(stm.split("|")[2]!="")
					{
				      $("#PRPM_URMNNO").val(stm.split("|")[2])
					  
                    //alert(stm.split("|")[3]+'. UMR No -'+stm.split("|")[2])
					}
					else
					{
					  //alert(stm.split("|")[3])	
					}
				}				   
			   },
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                // alert("E-NACH Failed.");
						 //	return false;
		                   }
	               });
			   }
	  } */
	  var xml=UI_getdata($("#PrcsID").val(),$("#PRPM_LOANID").val(),"","","","LSW_SCHECKLOANTY")
	//var Enachid=$(xml).find('ENACHUID').text();
	
	  if($(xmlop).find('ENACHUID').text()!="")
	  {
	         if($("#PRPM_URMNNO").val() == "")
				{
	                  var PRCSID = $("#PrcsID").val();
	            $.ajax({
	    url: "/TPLSW/EmandateAPI",
	    type: 'POST',
	    data: {SPNAME:"LSW_SEMANDATEAPICREATE",Param1:$(xmlop).find('ENACHUID').text(),Param2:"Get",Param3:$("#PRPM_LOANID").val(),Param4:"",PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){  
			  if(stm == "")
	    		{
					//alert('E-NACH Failed')
					//return false;
				}
             else if(stm.split("~")[0]=="Failed")
	    		{
                 // alert(stm.split("~")[1])
				  //return false;
				}
				else if (stm.split("~")[0]=="Success")
	    		{
					if(stm.split("~")[1]!="")
					{
				      $("#PRPM_URMNNO").val(stm.split("~")[1])
					  $("#PRPM_URMNNO").next().addClass('active');
					  
                    //alert(stm.split("|")[3]+'. UMR No -'+stm.split("|")[2])
					}
					else
					{
					  //alert(stm.split("|")[3])	
					}
				}				   
			   },
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                // alert("E-NACH Failed.");
						 //	return false;
		                   }
	               });
			   }
	  }
	  
	  
	  
	  if($("#PRPM_URMNNO").val() != "")
	  {
	     $('input:radio[name=PRPM_MODE]')[2].checked = true;
         $('input[name=PRPM_MODE]').attr('disabled',true);
	  }
	  
	  
	  if($("#PRPM_URMNNO").val() == "")
	  {
		  if($("#DMY7").val().split('|')[11] != "")
		  {
		    if($('input:radio[name=PRPM_MODE]')[0].checked == false && $('input:radio[name=PRPM_MODE]')[1].checked == false && $('input:radio[name=PRPM_MODE]')[2].checked == false)
              {
			     $('input:radio[name=PRPM_MODE]')[2].checked = true;
		      }
		  }
	  }
	ChkEnachReson();
	
	//PUTID();
	
	//$("#BMTD_UNIQNO1").val($("#RPBD_ACCNUM1").val())
	
	//$('.FormSave').on('click', function() {
	 $(document).on("click", ".FormSave", function(){
		
		 var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save" || $(this).text() == "Save & Next")
		{
			var PdcType = $("#RPCD_PDCTYPE0").val()
			var RePaMode = $("input[name='PRPM_MODE']:checked").val()	
		if(PdcType =="PDC" )
			{
				if(RePaMode == "ACH" || RePaMode=="E-NACH" )
				{
				alert("Kindly Choose SPDC for E-NACH and ACH ");
				$("#RPCD_PDCTYPE0").val('')
				$("#RPCD_PDCTYPE0").material_select();
				return;
				}
			}
		var MndtryChk = ChkMandatoryFlds("PRPMMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		}
		 
		 
		 var tbl = $(this).attr("data-aria").split("|")[0];
	     var prfx = $(this).attr("data-aria").split("|")[1];
		 var DATA = $(this).attr("data-aria").split("|")[2];
		 
		 
		 var FINCELIGBLE = TxtGridsubmitdata_V1("Table2","RPCD_","PRPM_");
			AssignGridXmltoField("PRPM_CHQUDETL", FINCELIGBLE)
			
		var ELIGBLECUSLIST = TxtGridsubmitdata_V2("Repayment","RPBD_","PRPM_","RPBDDBfields"); 
	        AssignGridXmltoField("PRPM_MLTBNKDETL", ELIGBLECUSLIST)
	            
	    var INCMTable = TxtGridsubmitdata_V3("RPBDTable","BMTD_","PRPM_");
			AssignGridXmltoField("PRPM_BNKCHQDETL", INCMTable);    
		 
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#PRPM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			
			 if(CHKresult == "Fail")
				{
				  alert("Submission Failed");
				   return false;			
				}
			
	//var FormXML =	submitdata("CBSIDBfields");
		
		// Customer Seq ID Gen Start		
	
		/*if($(html).find("[name=BKDT_BNKNO]").val() == "")
		{
		var CUSID = UI_getdata("BNK","","Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }*/
		// Customer Seq ID Gen End 
		
		//$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())
		
		
		
				
			/*	var tbl = $(this).attr("data-aria").split("|")[0];
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];
	
				
				var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
				
				
				if (CHKresult == "Fail")
					{
					alert("Submission Failed");
					return false;			
					}
				else
				{
					alert("Account Details Saved Successfully")
				}
           */
		// Tab Header Change End

		if($(this).text() == "Save & Next")
		{
			
			var xml=UI_getdata($("#PrcsID").val(),"PDC","","","","LSW_SCHECKREPAYDATA")
				
				if($(xml).find('RESULT').text() != "OK")
				{
					alert($(xml).find('RESULT').text());
					return false;
				}
			  NXTTAB(this);
		}
		
	});
	 $('#AnotherChequeDetails').on('click', function() {
			
			var TableID = "Table2";
		
		var HTML="";

			
				var table = $("#"+TableID).DataTable();
				 
				var rowNode = table
				    .row.add( [ '', '', '','','', '','', '','','', '','',''] )
				    .draw()
				    .node();
				
				
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);
				$($(HTML).find('td')[5]).text($("#RPBD_ACCNUM"+$(this).closest('.DYNROW').attr('data-row')).val());
				
				// For Data Population in Grid Columns Start
				
				/*HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
				$($(HTML).find('td')[0]).text(value);			
				$($(HTML).find('td')[8]).text($("#UPDC_CUSID").val());*/
				
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
	 
	
	 
	 $(document).on("click", ".BNKAnotherCheque", function() {
			
			var TableID = $(this).attr("data-table");

		   var HTML="";

				var html1 = $($(this).closest(".DYNROW"));

				var table = $("#"+TableID).DataTable();
				 
				var rowNode = table
			    .row.add( [ '', '', '','','', '', '','','', '', '', '',''] )
			    .draw()
			    .node();
				
				
				var NewrowCnt = $("#"+TableID).find("tbody tr").length;
				
				// For Data Population in Grid Columns Start
				HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
				//$($(HTML).find('td')[6]).text($(html1).find("[name=EGCD_CUSID]").val());			
				//$($(HTML).find('td')[7]).text($(html1).find("[name=EGCD_UNIQUID]").val());
				//$($(HTML).find('td')[5]).text($("#RPBD_ACCNUM"+$(this).closest('.DYNROW').attr('data-row')).val());
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
	 
	 $(document).on("blur", ".NOFCHQ", function() {
		 
		 var NoOfChq = $("#Table2_wrapper").find(".tbodytr").length
		 var ChqCnt = 0;
		 var val="";
		 for (i=0;i<NoOfChq;i++)
			{
			val=$("#RPCD_NOFCHQ"+i).val()
			if (val == "")
				{
				val = 0;
				}
			ChqCnt = parseFloat(ChqCnt) + parseFloat(val);
			}
		 
		 $("#PRPM_NOCHQU").val(ChqCnt);
		 $("#PRPM_NOCHQU").next().addClass("active");
	 });
	 
		  
	 $(document).on("click", ".NOFCHQCOUNTDEL", function() {
		 
		 var NoOfChq = $("#Table2_wrapper").find(".tbodytr").length
		 var ChqCnt = 0;
		 var val="";
		 for (i=0;i<NoOfChq;i++)
			{
			val=$("#RPCD_NOFCHQ"+i).val()
			if (val == "")
				{
				val = 0;
				}
			ChqCnt = parseFloat(ChqCnt) + parseFloat(val);
			}
		 
		 $("#PRPM_NOCHQU").val(ChqCnt);
		 $("#PRPM_NOCHQU").next().addClass("active");
	 
	 });
	 
	 
  $(document).on("blur", ".NOFCHQ1", function() {
		 
	 var HTML = $(this).closest('.DYNROW')
	 var row = $(HTML).attr("data-row")
	 
		 var NoOfChq = $("#RPBDTable"+row).find(".tbodytr").length
		 var ChqCnt = 0;
		 var val="";
		 for (i=0;i<NoOfChq;i++)
			{
			val = $($(this).closest('.tbodytr').find('[data-item=Cheque2]')[i]).val().replace(/,/g,'');
			
			if (val == "")
				{
				val = 0;
				}
			ChqCnt = parseFloat(ChqCnt) + parseFloat(val);
			}
		 $("#RPBD_NOOFCHQU"+row).val(ChqCnt);
		 $("#RPBD_NOOFCHQU"+row).next().addClass("active");
	 });
	 
	

	$(document).on("click", ".DELREPAYBNKDET" , function() {

		 var html=$(this).closest('.DYNROW')
         if(confirm('Delete Bank Details') == true)
	 		{
	 
	 	 	   $(this).closest('.DYNROW').remove()	
	 	 		var k= $('.Repayment').find('.DYNROW').length
	 	 		for(i=0;i<k;i++)
	 	 			{
	 	 		
	 	 		    var	j=i+1
	 	            $($('.Repayment').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Bank Details '+j)
	 	 			}
	 		}
	 })    

});

