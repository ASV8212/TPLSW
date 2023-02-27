

$(document).ready(function(){
		$(".topTab0").click(function(){
			$(".selectedTopTab0").addClass("notSelectedTopTab0");
			$(".selectedTopTab0").removeClass("selectedTopTab0");
			$(this).removeClass("notSelectedTopTab0");
			$(this).addClass("selectedTopTab0");
		});
		
		$(".buttonPlus0").click(function(){
			if($(this).hasClass("buttonPlusClicked0")){
				$(this).html("+");
				$(this).removeClass("buttonPlusClicked0");
				$(this).addClass("buttonPlusNotClicked0");
			}
			else if($(this).hasClass("buttonPlusNotClicked0")){
				$(this).html("-");
				$(".buttonPlusClicked0").trigger("click");
				$(this).removeClass("buttonPlusNotClicked0");
				$(this).addClass("buttonPlusClicked0");
			}
		});
		
		$(".buttonPlus0").click(function(){
			if($(this).hasClass("buttonPlusClicked1")){
				$(this).html("+");
				$(this).removeClass("buttonPlusClicked1");
				$(this).addClass("buttonPlusNotClicked1");
			}
			else if($(this).hasClass("buttonPlusNotClicked1")){
				$(this).html("-");
				$(".buttonPlusClicked1").trigger("click");
				$(this).removeClass("buttonPlusNotClicked1");
				$(this).addClass("buttonPlusClicked1");
			}
		});
		
		$("#leftTopTab0").click(function(){
			$("#collapseFirst0").addClass("show");
			$("#collapseMiddle0").removeClass("show");
			$("#collapseLast0").removeClass("show");
		});
		
		$("#middleTopTab0").click(function(){
			$("#collapseFirst0").removeClass("show");
			$("#collapseMiddle0").addClass("show");
			$("#collapseLast0").removeClass("show");
		});
		
		$("#rightTopTab0").click(function(){
			$("#collapseFirst0").removeClass("show");
			$("#collapseMiddle0").removeClass("show");
			$("#collapseLast0").addClass("show");
		});
		
});

//Material Select Initialization
$(document).ready(function() {
$('.mdb-select').materialSelect();
});

