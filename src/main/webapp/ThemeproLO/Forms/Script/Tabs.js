$(function () {
    /*  $('ul.tabs li:first').addClass('active');
    $('.block article').hide();
    $('.block article:first').show();*/
	
// Main Page Tab Start
	
	$(".FormMainTabs li").on('click', function () {

		  //$('.FormPageTab li')
		  
		  var active = $(".FormMainTabs").find("li.active").attr("id");
		  
		  var DataValue = $(this).attr("data-value");
		  
		  if (DataValue != "")
			  {
			  DataValue = "&PrMs8=" + DataValue;
			  }
		  
		  var RedirectURL ="";
		  
		 if (active != $(this).attr("id"))
			 {
				 
		var BusinessId="";
		 if($(this).attr('id')=="FormMainTab7")
		 {
			 BusinessId="FIRM1"
		 }
		 
		 if($(this).attr('id') != "FormMainTab7")
		 {
		RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=NIL&PrMs10="+$(this).attr("id") + DataValue+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		  //RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+$(this).attr("id")+"&PrMs10="+MainActive + DataValue+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		 }
		 else{
			// RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs5="+$("#PrMs5").val()+"&PrMs6="+$("#PrMs6").val()+"&PrMs9="+$(this).attr("id")+"&PrMs10="+MainActive + DataValue+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		 RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=NIL&PrMs10="+$(this).attr("id") + DataValue+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		 }
		  
		 // $(this).addClass('active')
		 // RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=NIL&PrMs10="+$(this).attr("id") + DataValue+"&PrMs1="+$("#PrMs1").val();
			$(location).attr('href',encodeURI(RedirectURL));
			 }
		 else
			 {
			 $(this).addClass("active");
			 }
	})
	
// Main Page Tab End	
	
	// Form Page Tab Start
	
	$(".FormPageTab li").on('click', function () {

		  //$('.FormPageTab li')
		  
		           var Vertical=$("#VERTICAL").val();
	                  var Page="";
					  
					 if(Vertical=="UCV" || Vertical=="UCV Eco")
					 {
						Page="UCV"
					 }
		  
		  var active = $(".FormPageTab").find("li.active").attr("id");
		  
		  var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		  var RedirectURL ="";
		  
 var DataValue = $(this).attr("data-value");
		  
		  if (DataValue != "")
			  {
			  DataValue = "&PrMs8=" + DataValue;
			  }
		  
		 if (active != $(this).attr("id"))
			 {	
			 
			 if($(this).attr("value") == Page+"Guantr")
				 {
				  
				 var PST = UI_getdata($(this).attr("value"),$("#PrcsID").val(),"","","","LSW_SGETCOAPPLGAUST");	
					
					if($(PST).find("RESULT").text() == "Y")
						{
							if($("#PrMs1").val() == "View") 
							{
                                alert("No Guarantor has been added for this Application");
                                return;
							}
							else if($("#DMY5").val().split('|')[2]!="PreLogin" 
							&& $("#DMY5").val().split('|')[2]!="PreLoginSB" && $("#DMY5").val().split('|')[2]!="SendToCredit")
							{
							 alert("No Guarantor has been added for this Application");
                               return;
							}
				
				$("#NextPageID").val($(this).attr("id")+'|'+$(this).attr("value"));
					if($(this).attr("value") == "Guantr")
						{
						$(".CLABEL").text("Guarantor Type*");
						}
						if($(this).attr("value") == "UCVGuantr")
						{
						$(".CLABEL").text("Guarantor Type*");
						}
				$("#Popup").click();
				return;
						}

				/* var Result=(confirm("Do you want to add Guarantor!"))
				 
				 if(Result==true)
					 {
						if($(this).attr("value") == "CoApplcnt" || $(this).attr("value") == "Guantr")
						{
						
							var PST = UI_getdata($(this).attr("value"),$("#PrcsID").val(),"","","","LSW_SGETCOAPPLGAUST");	
							
							if($(PST).find("RESULT").text() == "Y")
								{
						
						$("#NextPageID").val($(this).attr("id")+'|'+$(this).attr("value"));
							if($(this).attr("value") == "Guantr")
								{
								$(".CLABEL").text("Guarantor Type*");
								}
						$("#Popup").click();
						return;
								}
						}
					 }
				 else
					 {*/
					//var xml=UI_getdata($(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"C","","","LSW_TFILEMILESTONCOMPL")  
				    //$(".FormMainTabs li.active").next().click();
				    //return;
						
					// }
				 }
			 else if($(this).attr("value") == Page+"CoApplcnt")
				{
					var PST = UI_getdata($(this).attr("value"),$("#PrcsID").val(),"","","","LSW_SGETCOAPPLGAUST");	
					
					if($(PST).find("RESULT").text() == "Y")
						{
				         if($("#PrMs1").val() == "View")
							{
                                alert("No Co-Applicant has been added for this Application");
                                return;
							}
				$("#NextPageID").val($(this).attr("id")+'|'+$(this).attr("value"));
					if($(this).attr("value") == "Guantr")
						{
						$(".CLABEL").text("Guarantor Type*");
						}
				$("#Popup").click();
				return;
						}
				}
if($(this).attr('id') != "IQ" && $(this).attr('id') != "OQ" && $(this).attr('id') != "CQ")
		       {				
		 // $(this).addClass('active')
		//Added at 20/06/2020 for Business purpose start
		var BusinessId="";
		 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab7" && $(this).attr('id')=="FormPageTab9")
		 {
			 BusinessId="FIRM1"
		 }
		 
		 if($(".FormMainTabs").find('li.active').attr('id') != "FormMainTab9")
		 {
		  RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+$(this).attr("id")+"&PrMs10="+MainActive + DataValue+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		 }
		 else{
			 RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs5="+$("#PrMs5").val()+"&PrMs6="+$("#PrMs6").val()+"&PrMs9="+$(this).attr("id")+"&PrMs10="+MainActive + DataValue+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		 }
			$(location).attr('href',encodeURI(RedirectURL));
			
			//Added at 20/06/2020 for Business purpose end
			 }
			 }
	})
	
	
	// Form Page Tab Type 1 START

	$(".FormPageSubTab li").on('click', function () {	
	
		$("#NextPageID").val("");
		
		  var Subactive = $(".FormPageMultiTab").find("li.active").attr("id");
			
		  var Formactive = $(".FormPageTab").find("li.active").attr("id");
		  
		  var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		  
		  var RedirectURL ="";
		   var DataValue=$(this).attr("data-value");
		 			  
		  if (DataValue != "")
			  {
			  DataValue = "&PrMs8=" + DataValue;
			  }

		  if($("#PrMs8").val().split("|")[0] == "AdditionalURL")
			{
			 DataValue = "&PrMs8=" + $("#PrMs8").val();
			}
		if($(this).attr("id") != "IQQRL" && $(this).attr("id") != "IQQR")
			 { 
			 if (Subactive == $(this).attr("id"))
				 {		  
			 // $(this).addClass('active')
			  RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+DataValue+"&PrMs6="+$(this).attr("id")+"&PrMs5="+Subactive+"|"+$(this).attr("id")+"&PrMs1="+$("#PrMs1").val();
			  $(location).attr('href',encodeURI(RedirectURL));
				 }
			 else
				 {
				  RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+DataValue+"&PrMs6="+$(this).attr("id")+"&PrMs5="+Subactive+"|"+$(this).attr("id")+"&PrMs1="+$("#PrMs1").val();
				  $(location).attr('href',encodeURI(RedirectURL));
				 }
			 }
		
})

	// Form Page Tab Type 1 END
	
	
		//$(".FormPageMultiTab li").on('click', function () {
$(document).on("click", ".FormPageMultiTab li", function() {
		  //$('.FormPageTab li')
		
			$("#NextPageID").val("");
			
			  var Subactive = $(".FormPageMultiTab").find("li.active").attr("id");
				
			  var Formactive = $(".FormPageTab").find("li.active").attr("id");
			  
			  var MainActive = $(".FormMainTabs").find("li.active").attr("id");
			  var RedirectURL ="";
			   var DataValue=$(this).attr("data-value");
			 			  
			  if (DataValue != "")
				  {
				  DataValue = "&PrMs8=" + DataValue;
				  }
			  
			  
	if ($(this).hasClass("FormPageMultiTabAdd"))
			{		
		
// Add Tab Validations Start
		
		// Disbursement Tranche Start
			// Added by Bala for Jira HE-5117 Start
	//if ($(this).prev().text().indexOf("Tranche") >= 0)
			//{
	     if(Formactive=="FormPageTab1" && MainActive=="FormMainTab8")
            {
		  // Added by Bala for Jira HE-5117 End
		  
		  var OP= UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLOANUNIQUE")
		  $("#PopUpDrop").append($(OP).find("RESULT").html());
		  $("#PopUpDrop").material_select(); 
		      $("#TreanchPopup").click()
			return;
              var trst = UI_getdata($("#PrcsID").val(), $(this).prev().text(), $("#DMY3").val().split("|")[3], "", "", "LSW_SCHKTRANCHEST");			
			
			   if ($(trst).find("RESULT").text() != "")
			   {
			     alert($(trst).find("RESULT").text());	
			     return;
			   }
			}
			// Disbursement Tranche End
			
			
	// PF Start	
	// Added by Bala for Jira HE-5117 Start
	//if ($(this).prev().text().indexOf("PF") >= 0)
			//{
	if(Formactive=="FormPageTab1" && MainActive=="FormMainTab3")
      {
		  // Added by Bala for Jira HE-5117 End
	
	    if ($("#PFDT_TRANSSTATUS").val() == "" && $("#PFDT_DEFRSTATUS").val() != "Rejected") // Added And condition for JIRA 2713
	        {
		       alert("Added PF not Collected");
		        return
	        }
	
          var trst = UI_getdata($("#PrcsID").val(), $(this).prev().text(), $("#DMY3").val().split("|")[3], "", "", "LSW_SADDPFCHECK");			
			
	    if ($(trst).find("RESULT").text() != "Success")
			{
			    alert($(trst).find("RESULT").text());	
			    return;
			}	
	}
			
// Add Tab Validations End			
			
		var licount = $(".FormPageMultiTab li").length;
		var value = $(".FormPageMultiTab").attr('title');
		var PopUp  = $(".FormPageMultiTab").attr('data-popup');
		if ((Subactive.indexOf ($(".FormPageMultiTab").attr('title')) >= 0)&&(value !="Tranche"))
			{
			alert("Newly added " + Subactive + " not saved");
			}
		else{
			
			if (PopUp == "Yes")
			{				
		        $(".CLABEL").text($('.FormMainTab1 li.active').text()+' Type')
		    	$("#Popup").click();
			}
		else
			{
				//Added at 20/06/2020 for Business purpose start
				   var BusinessId="";
		 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab7" && $(".FormPageTab").find('li.active').attr('id')=="FormPageTab9")
		 {
			 var Count=licount
			 BusinessId="FIRM"+Count
		 }
		 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab2" && $(".FormPageTab").find('li.active').attr('id')=="FormPageTab1")
		 {
			if(licount>2)
			{
              alert('Two Loan Details only added');
			  return false;
			}				
		 }
				
			//RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+"&PrMs8="+value+"|"+licount+"|"+"Add"+"&PrMs1="+$("#PrMs1").val();
			 //$(location).attr('href',encodeURI(RedirectURL));
			
			  // 19/06/2020 Firm Tab Changes Start
			//RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageMultiTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+"&PrMs8="+value+"|"+licount+"|"+"Add"+"&PrMs1="+$("#PrMs1").val();
			 //$(location).attr('href',encodeURI(RedirectURL));
			 // 19/06/2020 Firm Tab Changes End
			 
			 RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageMultiTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+"&PrMs8="+value+"|"+licount+"|"+"Add"+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
			 $(location).attr('href',encodeURI(RedirectURL));
			 
			 //Added at 20/06/2020 for Business purpose end
			}	
			
		}
			}
	else
		{
		if($("#PrMs8").val().split("|")[0] == "AdditionalURL")
		{
		 DataValue = "&PrMs8=" + $("#PrMs8").val();
		}
		  
		 if (Subactive == $(this).attr("id"))
			 {		  
		 
		 
		 // $(this).addClass('active')
		  //RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+DataValue+"&PrMs6="+$(this).attr("id")+"&PrMs1="+$("#PrMs1").val();
          RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+DataValue+"&PrMs6="+$(this).attr("id")+"&PrMs1="+$("#PrMs1").val();
		 		 
		 $(location).attr('href',encodeURI(RedirectURL));
		 
		
			 }
		 else
			 {
				 //Added at 20/06/2020 for Business purpose start
		 		   var BusinessId="";
		 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab7" && $(".FormPageTab").find('li.active').attr('id')=="FormPageTab9")
		 {
			 BusinessId=$(this).attr("id")
		 }
			 // RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+DataValue+"&PrMs6="+$(this).attr("id")+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
			  // $(location).attr('href',encodeURI(RedirectURL));
			  
			  RedirectURL = window.location.origin+"/TPLSW/"+$(this).attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+DataValue+"&PrMs6="+$(this).attr("id")+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
			  $(location).attr('href',encodeURI(RedirectURL));
			  
			  
			 //Added at 20/06/2020 for Business purpose end
			 }
		}
	})
	
	// Form Page Tab End
		
    $('ul.tabs li').on('click', function () {

        $('ul.tabs li').removeClass('active');
        $(this).addClass('active')
        $('.block article').hide();
       
        var IOP=window.location.origin;
        var activeTab = $(this).find('a').attr('href');

        var formid = document.getElementsByClassName('formIdentity')[0].id;

        if (formid == "Programme") {

            if (activeTab == "#Tab1") {
                if ($('.Tab1').text() == "")
                	 $( "#C_Tab1").load( "SCF_FChargeDetails" );
                	 //document.getElementById('iframe2').src = IOP+"/ThemePro_LSW/SCF_FPostingDetails" + pathname;
                
            }

            /*if (activeTab == "#Tab2") {
                if ($('.Tab2').text() == "")
                	 $( "#C_Tab2").load( "SCF_FPostingDetails" );
            }
			
			if (activeTab == "#Tab3") {
                if ($('.Tab3').text() == "")
                	 $( "#C_Tab3").load( "SCF_FDocumentAttachment" );
            }*/
			
			 $('.PageContent').hide();
			var cTab=activeTab.substring(1,activeTab.length);
			$('.'+cTab).show();
            //$(activeTab).show();
            return false;
        }

    
        if (formid == "AllForms") {

            if (activeTab == "#Tab1") {
                if (document.getElementById('iframe1').src == "")
                	$( "#C_Tab1").load( "SCF_FChargeDetails" );

               
            }

            $(activeTab).show();
            return false;
        }

    });
})
 

 $(document).ready(function () {

	 // Tabs Active Control

	 // Main Tab
	
	 if ($('.FormPageMultiTab').length > 0)
		 {
	$('.FormPageMultiTab').removeClass('active');		 

		 }
		$("#"+ $("#PrMs10").val()).addClass("active");
	
	// Page Tab
	 if ($("#PrMs9").val() != "")
		 {
			 
		
 // Added for New Mapping GECL START
			 if ($("#PrMs9").val() == 'NIL')
			 {
				 $('.FormPageTab li').removeClass('active');
	 $($('.FormPageTab li')[0]).addClass("active");
			 } // Added for New Mapping GECL END
			else if ($('.FormPageTab').length > 0)   // else Added for New Mapping GECL
	 {
	$('.FormPageTab li').removeClass('active');
	$("#"+ $("#PrMs9").val()).addClass("active");
	 }		
			 
	/* if ($('.FormPageTab').length > 0)
	 {
	$('.FormPageTab li').removeClass('active');
	$("#"+ $("#PrMs9").val()).addClass("active");
	 }*/
	  
	 
		 }
	// Sub Tab
	if ($('.FormPageMultiTab').length > 0)
	{
		
		$('.FormPageMultiTab li').removeClass('active');
		
		if($("#PrMs6").val() != "")
		{
		$("#"+ $("#PrMs6").val()).addClass("active");
		}
		
		else if($("#PrMs8").val() != "")
		{
	
		var ms = $("#PrMs8").val();
		
		if (ms.indexOf('|')>=0)
			{
			$("#"+ ms.split('|')[0]+ms.split('|')[1]).addClass("active");
			}
		else
			{
			$("#"+ $("#PrMs6").val()).addClass("active");
			}
	
	 
		}
	
	else
		{
		$('.FormPageMultiTab li:first').addClass("active");
		}
		
		if  ($('.FormPageMultiTab li').hasClass("active") == false)
			{
			$('.FormPageMultiTab li:first').addClass("active");
			}
		
		
	}
	 // Tabs Active Control
	$(document).on("click", ".AFormaccordion", function(e) {	
//$(".AFormaccordion").click(function () {
	 	

 		// Data Load on Strip Click Start
 		
		if($(this).attr("data-load") != "Yes")
		{
			
			if($(this).attr("data-multidata") == "")
 			{
				var tbl = $(this).attr("data-aria").split("|")[0];	
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];
				var CusID =$(this).attr("data-aria").split("|")[2];
				var CusID1 =$(this).attr("data-aria").split("|")[3];
				
				if($(this).attr("data-aria").split("|").length > 4)
					{
				var CusID2 =$(this).attr("data-aria").split("|")[4];
				var CusID3 =$(this).attr("data-aria").split("|")[5];
				
				if ($("#"+CusID3).length>0)
				{
		    $("#"+CusID2).val($("#"+CusID3).val())
				}
				
					}
				if ($("#"+CusID1).length>0)
					{
		        $("#"+CusID).val($("#"+CusID1).val())
					}
				if  (DATA != "")
				{
					DATA = $("#"+DATA).val()+"|" + DATA;
				}
				
				if($(this).attr("aria-expanded") == "false" || $(this).attr("aria-expanded") == "true")
					{
				FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
				
				
				if ($("#"+CusID1).length>0)
				{
				   $("."+CusID1).text($("#"+CusID1).val());
				}
				
				$(this).attr("data-load","Yes");
					}
 			}
			else if($(this).attr("data-multidata") != ""){
				var BTN = $(this).attr("data-multidata")
				$("#"+BTN).click();
				
				$(this).attr("data-load","Yes");
			}
		
		}
		//PutAppltype();
 		// Data Load on Strip Click End
 		
		
		
 		$(".Formaccordion").find(".active").find('a').addClass("Btxt7");
 		$(".Formaccordion").find(".active").find('a').removeClass("Btxt8");			
 		$(".Formaccordion").find(".active").find('a').find('i').addClass("fa-plus-circle");
 		$(".Formaccordion").find(".active").find('a').find('i').removeClass("fa-minus-circle");
 		
 		var active = "";
 		var activest="";
 		
 		if($(".Formaccordion").find(".active").find('a').length > 0)
 		{ 		
 		active = $(".Formaccordion").find(".active").find('a').attr("href");
 		
 		}
 	
 		$(".Formaccordion").find(".card-header").removeClass("active");
 		$(this).parent('div').parent('div').removeClass("active");
 		//$(this).parent('div').parent('div').removeClass("active");
 		
 		
 			
 		if (active != $(this).attr("href"))
 			{
 		$(this).parent('div').addClass('active');
 		
 		if (active != "")
			{
		$("#" + active.replace("#","")).removeClass("show");
			}
 		
 			}
 		
 		if ($(this).parent('div').hasClass("active"))
 			{
 		
 		$(this).removeClass("Btxt7");
 		$(this).addClass("Btxt8");
 		
 		$(this).find('i').removeClass("fa-plus-circle");
 		$(this).find('i').addClass("fa-minus-circle");
 			}
 		/*else
 			{
 			$(this).addClass("Btxt7");
 			$(this).removeClass("Btxt8");
 			
 			$(this).find('i').addClass("fa-plus-circle");
 			$(this).find('i').removeClass("fa-minus-circle");
    	}*/
		
		
		//DISABLE BASED ON CONDITION START 

 		/*if($("#DMY7").val().split("|")[0]=="Registered Mortgage")
 				{
 		          
 				  if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab6"))
 				  {
 					  
 				  }
 				  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab7")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab7"))
 				  {
 					  
 				  }
 				  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab7"))
 				  {
 					  
 				  }
 				  else if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab1")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab8"))
 				  {
 					  
 				  }
 				  else
 				  {
 		           // DSVLBLALL()
 					DSVLBLALLWS()
 				  }
 		        }*/


 		

 		if(($("#DMY5").val().split("|")[1]=="Yes") || $("#PrMs1").val()=="View")
 				{
 				  if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab1")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab5"))
 				  {
 					  
 				  }	
				  else if($("#VERTICAL").val() == "UCV Eco" && $("#PrMs9").val() == "FormPageTab4" && $("#PrMs10").val() == "FormMainTab7" && $("#DMY7").val().split("|")[19] == "Y")
				{

				}
 		      else
 			     {
 		          DSVLBLALL('')
 		        }
               }
		

 	});	
	
	$('.Formaccordion').on('show.bs.collapse', function () {
 		
		 var scrollPos =  $(this).find('div').offset().top;
		 $(window).scrollTop(scrollPos - 50);
		
	})
 	
	$('.Formaccordion').on('hidden.bs.collapse', function () {
 		
		 var scrollPos =  $(this).find('div.active').offset().top;
		 $(window).scrollTop(scrollPos - 50);
		
	})

 });	