var Hiddencln = "";
$(document).ready(function () {
	var usraccess = UI_getdata($("#LogUsr").val(),"TAGGEDROLE","","","","LSW_SGETPDDROLE")
	if($(usraccess).find("TAGGEDROLE").text() == "CREDIT")
	{
		Hiddencln = "1,3,4,5,6,7,8,9,12,13,16";
	}
	else if($(usraccess).find("TAGGEDROLE").text() == "RCU")
	{
		Hiddencln = "1,3,4,5,6,7,8,9,12,13,15";
	}
	else{
		Hiddencln = "1,3,4,5,6,7,8,9,12,13,15,16";
	}
	
	FncallDocChkLst(this,'Table2',{spname:'LSW_SFETCHPDDDOCTOBEAPPRV',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:getUrlParam("ActvID"),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+Hiddencln,'MANGPDDFLOW');

	
	$(document).on("click", "#Reject" , function() {
		if (confirm("Are you sure to Reject the PDD Flow") == true) {
			Datains();
			UI_getdata(getUrlParam("PrcsID"),$("#LogUsr").val(),$(this).text().toUpperCase(),"","","LSW_SHEFLOWANDPDDFLOWLINK_UPD")
			WFComplete (getUrlParam("PDDActID"),"var_status=Reject","");
		}
	});
	
	$(document).on("click", "#Submit" , function() {
		if (confirm("Are you sure to Process the PDD Flow") == true) {
			Datains();
			var op = UI_getdata(getUrlParam("PrcsID"),$("#LogUsr").val(),$(this).text().toUpperCase(),"","","LSW_SHEFLOWANDPDDFLOWLINK_UPD")
			if($(op).find("RESULT").text() == "SUCCESS")
			{
				WFComplete (getUrlParam("PDDActID"),"var_status=Approve","");
			}
			else{
				alert($(op).find("RESULT").text());
				$(location).attr('href',window.location.origin + "/TPLSW/MyApplication")   
			}
		}
	});
	
	$(document).on("click", ".ViewAttch1" , function() {
	
	
	
	
	var IOP=LoadFrmXML("RS006");
	var RedirectURL="";
    var url= $("#DMY1").val()
    
    
		    if ($(this).next().val().split("\\")[0] != "")
		    	{
	
	
	     var FileStatus= $(this).next().val().split("\\")[0] 
			
			 FileStatus=FileStatus.includes("karza");
			
			if(FileStatus==true)
			{
			   RedirectURL=$(this).next().val().split("\\")[0]
			}
			else
			{
			    RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID="+getUrlParam("ActvID") + "&DMSID=" + $(this).next().val().split("\\")[0];
			}
	
	
	
	$("#DocView").attr("src", RedirectURL);
	
	}
		    else
	    	{
	    	alert("No Attachments Available to View");
	    	}
	
	
});

});


 


