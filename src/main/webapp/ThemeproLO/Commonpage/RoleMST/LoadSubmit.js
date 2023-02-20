$(document).ready(function () {
	
	$(".FormMainTab1").hide();

	$("#BTNRCUGRD").click();
	
		oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
		
		

	$('.Save').on('click', function() {
	

		});
	
	
	
$(document).on("click", ".NEWROLE", function(e) {
	//var MainActive = $(".FormMainTabs").find("li.active").attr("id");
	//var PAGENAME="Rolecreation"
	//	Page="New"
	//RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs10="+MainActive+"&PrMs5="+Page;
	//$(location).attr('href',encodeURI(RedirectURL));
	
	
	
	
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
	        	$(location).attr('href',window.location.origin + "/TPLSW/Rolecreation?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1");         	
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
		
		
$(document).on("click", ".Roleedit", function(e) {	
             //	var prcsid=	$($(this).closest('.tbodytr').find('.tbodytrtd')[3]).find('input[type=text]').val()
			 
			 
			// var Oldprcsid1=	$($(this).closest('.tbodytr').find('.tbodytrtd')[3]).find('input[type=text]').val()
			
			
			var Oldprcsid1=$($(this).closest('tbody tr').find('td')[3]).find('input[type=text]').val()
			
	             	var Code="C008";
		var NAME="WFINIT";
		var OldPrcsID= Oldprcsid1;
		var SPNAME="LSW_SROLECREATIONUPDATE";
		
		
	 $.ajax({
	       
	        url: "/TPLSW/WFINITV1",
	        //dataType: "json",
	        data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
	        async: true,	      
	        type: "POST",
	        success: function(res) {
	        		            	
	        if	(res.split("~")[0] == "Workflow Initiated")
	        	{
	        	$(location).attr('href',window.location.origin + "/TPLSW/Rolecreation?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=EDIT");         	
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
		
		
			
		
});
