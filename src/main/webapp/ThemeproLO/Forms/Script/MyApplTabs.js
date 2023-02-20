$(function () {

	
	$($(".FormPageTab li")[0]).addClass("active");
	
	
	
	
	// Form Page Tab Start
	
	   $(document).on("click", ".FormPageTab li", function(e) {
		   
			 $(".FormPageTab").find("li.active").removeClass("active");
			 $(this).addClass("active");
			 
			 GridTrg(this);
 
		if($(".FormMainTab1 li.active").text()=="View" || $(".FormMainTab1 li.active").text()=="Disbursed")
	{
		$(".ViewOnly").show();
	}
	else
	{
		$(".ViewOnly").hide();
	}
	})
		



	$($(".FormPageTab li")[0]).trigger("click");
	

})
