var EditAccess;
$(function () {

	
	$($(".PageScreenTab li")[0]).addClass("active");
	
	
	  var Channel=UI_getdata("","","","","","LSW_SGETCHANNEL")
    $("#SRCCATRY").append($(Channel).find("RESULT").html());	
	
	// Form Page Tab Start
	
	   $(document).on("click", ".PageScreenTab li", function(e) {
		   
			 $(".PageScreenTab").find("li.active").removeClass("active");
			 $(this).addClass("active");
			 $("#PrMs6").val($(this).attr('id'))
		if($("#PrMs6").val()!="")
		{
			$(".UploadPageData").show();

			
			$("#BTNIVLDVDRGRD").click();
			
			var xml=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),"","","","LSW_SGETUPLDVDRCNT")
			
			$("#SuccessCnt").text($(xml).find('SUCCESSCNT').text())
			$("#FailedCnt").text($(xml).find('FAILEDCNT').text())
			$("#CntStatus").val($(xml).find('STATUS').text())
			
			oTable = $('#Table4').DataTable();
		$('#SearchTable4').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})
		}

	})

	$($(".PageScreenTab li")[0]).trigger("click");
	

})

$(document).ready(function () {
	EditAccess =UI_getdata($("#LogUsr").val(),"","","","","LSW_SUSRACCESS2EDITUAM")
	if($(EditAccess).find('RESULT').text()=='N'){
		$('.NEWDEPT').hide()
	}

	
//	FormDataFromDB("LSW_TLOANDETAILS","LODE_","LODEDBfields", "");
	
		$(".FormMainTab1").hide();

$(".UploadPageData").hide();

	    $("#BTNRCUGRD").click();
	
       oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	

	  var Channel=UI_getdata("","","","","","LSW_SGETCHANNEL")
    $("#VENDORTYPE").append($(Channel).find("RESULT").html());			
		
		
		
	$('.Save').on('click', function() {
		
	//	var xml = submitdata("USEMDBfields");

		});
	
	
	$(document).on("click", ".NEWVENT", function(e) {
/*	var MainActive = $(".FormMainTabs").find("li.active").attr("id");
	var PAGENAME="Vendorcreation"
		Page="New"
	RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs10="+MainActive+"&PrMs5="+Page;
	$(location).attr('href',encodeURI(RedirectURL));*/
	
	
	var Code="C008";
		var NAME="WFINIT";
		var OldPrcsID= "";
		var SPNAME="";
		
		
	 $.ajax({
	       
	        url: "/TPLSW/WFINITV1",
	        //dataType: "json",
	        data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
	        async: true,	      
	        type: "POST",
	        success: function(res) {
	        		            	
	        if	(res.split("~")[0] == "Workflow Initiated")
	        	{
	        	$(location).attr('href',window.location.origin + "/TPLSW/Vendorcreation?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=NEW");         	
	        	}
	        else
	        	{
	        	alert("Flow Initiation Failed");
	        	}
	            //console.log(res)
	        },
	        error: function(res) {
	        	
	        	alert("Flow Initiation Failed");
	            }
	    });
	
			})
		

$(document).on("click", ".Venedit", function(e) {
             	//var Oldprcsid1=	$($(this).closest('.tbodytr').find('.tbodytrtd')[5]).find('input[type=text]').val()
		   var UNIQID=$($(this).closest('tbody tr').find('td')[8]).find('input[type=text]').val()
			
			var VALIDATIONCHK=UI_getdata('Vendor Creation',UNIQID,"","","","LSW_SCHKFILEINFLOW")
			var RESULT=$(VALIDATIONCHK).find('RESULT').text();
			if(RESULT=="SUCCESS")
			{
			var Oldprcsid1=$($(this).closest('tbody tr').find('td')[9]).find('input[type=text]').val()
	             	var Code="C008";
		var NAME="WFINIT";
		var OldPrcsID= Oldprcsid1;
		var SPNAME="LSW_SVENDORCREATIONUPDATE";
		
		
	 $.ajax({
	       
	        url: "/TPLSW/WFINITV1",
	        //dataType: "json",
	        data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
	        async: true,	      
	        type: "POST",
	        success: function(res) {
	        		            	
	        if	(res.split("~")[0] == "Workflow Initiated")
	        	{
	        	$(location).attr('href',window.location.origin + "/TPLSW/Vendorcreation?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=EDIT");         	
	        	}
	        else
	        	{
	        	alert("Flow Initiation Failed");
	        	}
	            //console.log(res)
	        },
	        error: function(res) {
	        	
	        	alert("Flow Initiation Failed");
	            }
	    });
		
			}
			
			else
			{
			 alert(RESULT)
             return false;			 
            }
			})				
		
	$(".EXPORT").click(function()
			{
		$("#VENEXPORT").click();
	
			})				
			
		
});
