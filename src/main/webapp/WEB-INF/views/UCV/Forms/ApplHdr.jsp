
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

 <!--  <li id="FormMainTab1" value="CustomerDetails" class="nav-item FormMainTab">
    <a class="nav-link active Ntxt4" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
      aria-selected="true">
      <span id="FormMainSpanB1" class="badge badge-pill badge-default FormMainTabbadge Ntxt4">1</span>
     <span id="FormMainSpanTxt1">CUSTOMER DETAILS</span></a>
  </li>
  <li id="FormMainTab2" value="LoanProperty" class="nav-item FormMainTab">
    <a class="nav-link Ntxt4" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
      aria-selected="false">
      
       <span id="FormMainSpanB2" class="badge badge-pill badge-default FormMainTabbadge Ntxt4">2</span>
      
      <span id="FormMainSpanTxt2">LOAN & PROPERTY</span></a>
  </li>
  <li id="FormMainTab3" value="BankPFDetails" class="nav-item FormMainTab">
    <a class="nav-link Ntxt4" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
      aria-selected="false">
        <span id="FormMainSpanB3" class="badge badge-pill badge-default FormMainTabbadge Ntxt4">3</span>
      
    <span id="FormMainSpanTxt3">BANK & PF DETAILS</span></a>
  </li>
    <li id="FormMainTab4" value="UploadDocument" class="nav-item FormMainTab">
    <a class="nav-link Ntxt4" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
      aria-selected="false">
      
       <span id="FormMainSpanB4" class="badge badge-pill badge-default FormMainTabbadge Ntxt4">4</span>
       <span id="FormMainSpanTxt4">UPLOAD DOCUMENT</span></a>
  </li>
    <li id="FormMainTab5" value="ViewReports" class="nav-item FormMainTab">
    <a class="nav-link Ntxt4" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
      aria-selected="false">
      <span id="FormMainSpanB5" class="badge badge-pill badge-default FormMainTabbadge Ntxt4">5</span>
      <span id="FormMainSpanTxt5">VIEW REPORTS</span></a>
  </li> -->
  
     
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

                        