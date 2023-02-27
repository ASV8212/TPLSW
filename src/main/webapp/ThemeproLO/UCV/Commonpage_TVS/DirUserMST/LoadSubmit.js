var EditAccess;
$(function () {

	
	$($(".PageScreenTab li")[0]).addClass("active");

	// Form Page Tab Start
	
	   $(document).on("click", ".PageScreenTab li", function(e) {
		   
			 $(".PageScreenTab").find("li.active").removeClass("active");
			 $(this).addClass("active");
			 $("#PrMs6").val($(this).attr('id'))
		if($("#PrMs6").val()!="")
		{
			$(".UploadPageData").show();

			$("#BTNIVLDUSRGRD").click();
			var xml=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),"","","","LSW_SGETUSRUPLDCNT")
			
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
	
	$(".UploadPageData").hide();
	
	$("#BTNRCUGRD").click();
	
	oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})

//	FormDataFromDB("LSW_TLOANDETAILS","LODE_","LODEDBfields", "");
		
	
	$(".UPDTEDEP").on('click', function() {
		  $("#UPDATEDEPART").click();  
	 })


	
	$('.Save').on('click', function() {
		
		var xml = submitdata("USEMDBfields");

		});
		
	oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
		
$(document).on("click", ".UpdteUser", function(e) {		
  // var Oldprcsid1=	$($(this).closest('.tbodytr').find('.tbodytrtd')[4]).find('input[type=text]').val()
	var Oldprcsid1=$($(this).closest('tbody tr').find('td')[7]).find('input[type=text]').val()
	var UNIQID=$($(this).closest('tbody tr').find('td')[6]).find('input[type=text]').val()
	var VALIDATIONCHK=UI_getdata('User Creation',UNIQID,"","","","LSW_SCHKFILEINFLOW")
			var RESULT=$(VALIDATIONCHK).find('RESULT').text();
			if(RESULT=="SUCCESS")
			{
   //var MainActive = $(".FormMainTabs").find("li.active").attr("id");
	var Code="C008";
		var NAME="WFINIT";
		var OldPrcsID= Oldprcsid1;
		var SPNAME="LSW_SUSERUPDATE";
		
		
	    $.ajax({
	       
	        url: "/TPLSW/WFINITV1",
	        //dataType: "json",
	        data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
	        async: true,	      
	        type: "POST",
	        success: function(res) {
	        		            	
	        if	(res.split("~")[0] == "Workflow Initiated")
	        	{
	        	$(location).attr('href',window.location.origin + "/TPLSW/diruser?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=EDIT");         	
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
		        $("#USEREXPORT").click();
				var xml=UI_getdata("","","","","","LSW_SGETLSTOFGROP")
	               var Group=$(xml).find('RESULT').html();				   
	            $("#URCR_USRTYPE").append(Group)
				//$("#URCR_USRTYPE").val('')
				$("#URCR_USRTYPE").material_select();
			})		
		
});
