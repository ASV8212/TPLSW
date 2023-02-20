$(document).ready(function()
{
    var op= UI_getdata('','','','','','Sam_SGetAccordTabList');
		
	op= op.replace('<Resultset><a><HTML>', "");	
	op= op.replace('</HTML></a></Resultset>',' '); 
	
	$(".accordion").empty();
	$('.accordion').append(op);
  
  GetfilestatusflddataNew();
  
  $(".AccTabs").click(function(){
$('.AccTabs').removeClass('AccActive');
 $(this).addClass('AccActive');
 
 
  GetfilestatusflddataNew();
	

  });
  
});

function GetfilestatusflddataNew()
{
	$('#filestatusdata').empty();
  
	var wfid = $('.AccActive').attr('id');
	
	var op= UI_getdata(wfid,$('#TXTmenuID').val(),$("#LoggedInUser").val(),'','','SAM_sGetfilestatusdata');
		
	op= op.replace(/<Resultset><a><HTML>/g, "");	
	op= op.replace('</HTML></a></Resultset>',' '); 
	$('#filestatusdata').append(op);
	
	var list=$('.nav').find('li')[0];
	$(list).click();

	$(list).addClass('active');
	
	
}