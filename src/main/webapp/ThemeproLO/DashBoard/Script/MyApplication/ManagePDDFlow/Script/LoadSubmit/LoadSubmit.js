$(document).ready(function () {

	var IOP = window.location.origin + '/jw';

	var URL = window.location.href;
	
	URL = URL.split("TPLSW")[1].replace('/','');
	
	
	$(".ULHdrLS").find("[href='"+URL+"']").removeClass("Btxt16Inactive");
	$(".ULHdrLS").find("[href='"+URL+"']").addClass("Btxt16");
	
	$("#FSN").click();
	
	
	
	//LoadDashBord();
	//CheckCusType();
	GETDROPDOWNVAL("Load");
	getBranch();
	$(".fixed-action-btn").show();
	
	$(".FltMnu").click(function () {


		 $(location).attr('href',$(this).attr("name"));
		

	    });
	
	
		
		
		
		  $(document).on("click",".MANAGEDEFR",function() {
		
//$(".InitWF1").click(function () {
			
$(location).attr('href',window.location.origin + "/TPLSW/ManagePDDFlowAthr?PrcsID="+$($(this).parent().parent().find('td')[5]).text()+"&ActvID="+$($(this).parent().parent().find('td')[4]).text()+"&PrMs4="+$($(this).parent().parent().find('td')[1]).text()+"&PrMs5=PDD&PrMs9=&PrMs10=&PDDActID="+$($(this).parent().parent().find('td')[6]).text());         	
			 
		});
		 GridTrg("Load");

	oTable = $('#Table3').DataTable();
	$('#SearchTable3').keyup(function(){
	      oTable.search($(this).val()).draw() ;
	})	
});


function GridTrg(evnt)
{
	$(".OPSCRTO").hide();
	$(".QDTO").hide(); 
	
	FncallMyAppl(this,'Table3',{spname:'LSW_SMYAPPLNPDD_FLOW',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#DMY4').val().split("|")[0],MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','MANAGEDEFRFLOW');
	 
}

 


