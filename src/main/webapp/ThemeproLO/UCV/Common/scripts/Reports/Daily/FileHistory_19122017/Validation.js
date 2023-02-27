$(document).ready(function()
{
		  var op= UI_getdata('','','','','','Sam_SGetAccordTabList');
		
	op= op.replace('<Resultset><a><HTML>', "");	
	op= op.replace('</HTML></a></Resultset>',' '); 
	
	$(".accordion").empty();
	$('.accordion').append(op);
   REPTHISTPAGEDATANew();
  
  $(".AccTabs").click(function(){
$('.AccTabs').removeClass('AccActive');
 $(this).addClass('AccActive');
 
 
  REPTHISTPAGEDATANew();
	

  });
  
});

function REPTHISTPAGEDATANew()
{
	var wfid = $('.AccActive').attr('id');
	
	//$("#WFIDHist").val(wfid);
	
	var OP = UI_getdata(wfid,"","","","","Sam_sRGetHistPageFlds");
		
		$(".trremove").remove();
		//document.getElementById('Table2').style.display=""
		
		$("#GetFileHistData").trigger("click");
		
	     $("#HistFields").append(OP.replace("</HTML></a></Resultset>","").replace("<Resultset><a><HTML>",""));
		 
	
	var list=$('.nav').find('li')[0];
	$(list).click();

	$(list).addClass('active');
	
}