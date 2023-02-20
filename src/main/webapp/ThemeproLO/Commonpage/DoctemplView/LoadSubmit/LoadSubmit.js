$(document).ready(function () {

     $("#HIDDENCOL").val('1')
	 FncallMyAppl(this,'Table3',{spname:'LSW_SGETDOCUMTEMPLEVIEW',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'',brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentTEMPLATESView');

var IOP = window.location.origin + '/jw';

	var URL = window.location.href;
	
	URL = URL.split("TPLSW")[1].replace('/','');
	
	
	$(".ULHdrLS").find("[href='"+URL+"']").removeClass("Btxt16Inactive");
	$(".ULHdrLS").find("[href='"+URL+"']").addClass("Btxt16");
	
	
oTable = $('#Table3').DataTable();
		$('#SearchTable3').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
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
	
});


