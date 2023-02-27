$(document).ready(function () {
	 $(".NewTab").on("click", function () {

	       
	      //  $("#Rearrange").hide();
	        $(".ShowNewQueue").show();
	        $(".EditDetails").hide();
	      
	        $('.TXTFIELDSCLEAR').find('input:text').each(

	                function () {
	                    $('input:text[id=' + $(this).attr('id') + ']').val('');
	                }

	            );
	       
	       

	    });
	 
	 $('#Genlkup').click(function () {
		 $('#PKID').val();
	 })
	 
	 $('#save').click(function () {
		 $(".Newdetls").addClass("Mndtry");
		 $(".Editdetls").removeClass("Mndtry");
		 var chkmndtry = ChkMandatory("Mndtry");


	     if (chkmndtry == "No") {
	         return;
	     }
	        var XmlTxt = submitdata("DBfields");
	     var param='New';
	       // alert(XmlTxt);
	        $.ajax({
	            url: "ThemeproLO/UI_formdatains_General",
	            data: { xml: XmlTxt,Param:param },
	            async: false,
	           // dataType: "json",
	            type: 'POST',
	            success: function OnSuccess_submit(data) {
	                if (data == 'Success') {

	                   // $("#Tab3").trigger("click");
	                	
	                	
	                  
						//alertify.alert(LoadFrmXML("V0108"));
						window.alert(LoadFrmXML("V0108"));
	                    document.getElementById('code').value = '';
	                    document.getElementById('shrtdescr').value = '';
	                    document.getElementById('descr').value = '';
	                 
	                }
	                else if(data=='Exists')
	                	{
								//alertify.alert(LoadFrmXML("V0121"));
								window.alert(LoadFrmXML("V0121"));
							
	                	}
	               
	            },
	            error: function OnError_submit(xmlRequest) {
	               
						//alertify.alert(LoadFrmXML("V0102"));
						window.alert(LoadFrmXML("V0102"));

	            }
	    });
	    });
	 $('#Update').click(function () {
		 
		 $(".Newdetls").removeClass("Mndtry");
		 $(".Editdetls").addClass("Mndtry");
		 var chkmndtry = ChkMandatory("Mndtry");


	     if (chkmndtry == "No") {
	         return;
	     }
	        var XmlTxt = submitdata("DBfields");
	     var param='Update';
	       // alert(XmlTxt);
	        $.ajax({
	            url: "ThemeproLO/UI_formdatains_General",
	            data: { xml: XmlTxt,Param:param },
	            async: false,
	           // dataType: "json",
	            type: 'POST',
	            success: function OnSuccess_submit(data) {
	                if (data == 'Success') {

	                   // $("#Tab3").trigger("click");
	                	
	                	
	                    
							//alertify.alert(LoadFrmXML("V0123"));
							window.alert(LoadFrmXML("V0123"));
	                    document.getElementById('Editcode').value = '';
	                    document.getElementById('Editshrtdescr').value = '';
	                    document.getElementById('Editdescr').value = '';
	                 
	                }
	                else if(data=='Exists')
                	{
						//alertify.alert(LoadFrmXML("V0121"));
						window.alert(LoadFrmXML("V0121"));
					
                	}
               
	            },
	            error: function OnError_submit(xmlRequest) {
	              
				   	//alertify.alert(LoadFrmXML("V0102"));
						window.alert(LoadFrmXML("V0102"));

	            }
	    });
	    });
	 
	 $('#Delete').click(function () {
	       
		 $(".Newdetls").removeClass("Mndtry");
		 $(".Editdetls").addClass("Mndtry");
		 var chkmndtry = ChkMandatory("Mndtry");


	     if (chkmndtry == "No") {
	         return;
	     }
	        var XmlTxt = submitdata("DBfields");
	     var param='Delete';
	       // alert(XmlTxt);
	        $.ajax({
	            url: "ThemeproLO/UI_formdatains_General",
	            data: { xml: XmlTxt,Param:param },
	            async: false,
	           // dataType: "json",
	            type: 'POST',
	            success: function OnSuccess_submit(data) {
	                if (data == 'Success') {

	                   // $("#Tab3").trigger("click");
	                	
	                	
	                  
							//alertify.alert(LoadFrmXML("V0124"));
							window.alert(LoadFrmXML("V0124"));
	                    document.getElementById('Editcode').value = '';
	                    document.getElementById('Editshrtdescr').value = '';
	                    document.getElementById('Editdescr').value = '';
	                 
	                }
	               
	            },
	            error: function OnError_submit(xmlRequest) {
						//alertify.alert(LoadFrmXML("V0102"));
						window.alert(LoadFrmXML("V0102"));
						

	            }
	    });
	    });
});

