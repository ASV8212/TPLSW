
<div id="FormPage1"></div>

 <div class="row">

<div class="col-md-1p5 ApplRow1Col1">

<div class="">
<div class="Ntxt5">Application ID</div>
<div class="Ntxt3 CBSIAPPINFO" id="APFI_APPLNO" name="APFI_APPLNO"></div>
<img class="appinfodrpdwn"   src="ThemeproLO/Common/FEP/images/downArrow.png" style="width:30px;height:15px" ></img>
</div>

</div>
<div class="col-md-1p5 ApplRow1Col2">

<div class="">
<div class="Ntxt5">Application Status</div>
<div class="Ntxt3 CBSIAPPINFO" id="APFI_APPLSTATUS" name="APFI_APPLNO"></div>
</div>

</div>

<div class="col-md-9 BGWhite">

<ul class="nav FormMainTabs" id="" role="tablist">
 ${MAINTABDATA}     
</ul>

</div>
</div>
         

 <div class="row menuAppinfo" style="display:none">

 <div class="col-md-3 menuclmAppinfo">

 ${DMY11}

<!--
<div class="row">
<div class="col-md-12 ApplRow1Col2">

<div class="">
<div class="Ntxt5">Loan Type</div>
<div class="Ntxt3 CBSIAPPINFO" >Fresh Loan</div>
</div>
</div>
</div>

<div class="row">
<div class="col-md-12 ApplRow1Col2">

<div class="">
<div class="Ntxt5">Applicant Name</div>
<div class="Ntxt3 CBSIAPPINFO" >TEST 1</div>
</div>

</div>
</div>-->



</div>
 
 </div>
 

		 
    <script>       
 $(document).ready(function () {

	
		$("#Cus").click(function () {
		
		//$(document).on('click', '#LCR', function () {
			
			$(location).attr('href',window.location.origin + "/TPLSW/CustomerDetails");
			
		});
		
		$("#LP").click(function () {
			
			//$(document).on('click', '#LCR', function () {
				
				$(location).attr('href',window.location.origin + "/TPLSW/LoanProperty");
				
			});
		
 			$(".appinfodrpdwn").click(function () {
			
				
				 $(".menuAppinfo").slideToggle("slow", function(){
		                // check paragraph once toggle effect is completed
		                if($(".menuAppinfo").is(":hidden")){
		                //	$(".menuAppinfo").show();
		                } else{
		                	//$(".menuAppinfo").hide();
		                }
				
				 });
	
			
			});	
 
 
});

</script>

                        