<html>
<head>
	    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	
	<title>ThemePro LSW- Login</title>
	
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/jquery-ui.css${DMY13}">
 <!-- <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/prettify.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/ui.jqgrid.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/NewGrid.css${DMY13}"> --> 

 <link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />  


<!--  <link href="ThemeproLO/Common/CSS/responsive.dataTables.min.css${DMY13}" rel="stylesheet" type="text/css" />--> 

  <!-- Font Awesome -->
   <link rel="stylesheet" href="ThemeproLO/Common/FEP/css/font-awesome.min.css${DMY13}">
   <link href="ThemeproLO/Common/FEP/css/BarlowFont.css${DMY13}" rel="stylesheet">
   
   
   

    <!-- Bootstrap core CSS -->
    <link href="ThemeproLO/Common/FEP/css/bootstrap.min.css${DMY13}" rel="stylesheet">

    <!-- Material Design Bootstrap -->
    <link href="ThemeproLO/Common/FEP/css/mdb.min.css${DMY13}" rel="stylesheet">

    <!-- Customizer -->
    <link rel="stylesheet" href="ThemeproLO/Common/FEP/css/customizer.min.css${DMY13}">
	

    <!-- Your custom styles (optional) -->
    <link href="ThemeproLO/Common/FEP/css/style.css${DMY13}" rel="stylesheet">
	
 <!--<link href="ThemeproLO/Common/FEP/css/Grid/datatables.min.css${DMY13}" rel="stylesheet">
	<link href="ThemeproLO/Common/FEP/css/Grid/datatables-select.min.css${DMY13}" rel="stylesheet">-->
	
 <!-- SCRIPTS -->

    <!-- JQuery -->
   <script type="text/javascript" src="ThemeproLO/Common/FEP/js/jquery-3.1.1.min.js${DMY13}"></script>

   
    
    
<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-ui.js${DMY13}" ></script>
<!-- <script type="text/javascript" src="ThemeproLO/Common/popup/js/script.js${DMY13}"></script>-->
<!--<script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min_BAK.js${DMY13}"></script>-->
<!-- <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/dataTables.responsive.min.js${DMY13}"></script> -->

 <script src="ThemeproLO/Common/scripts/Commonfiles/jquery.formgrid.js${DMY13}" type="text/javascript"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng_V1.js${DMY13}"></script>
    
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
   
	 <!--<script>history.pushState('', '', window.location.pathname)</script>-->
	 
	     <style type="text/css">
		 
		 body{
			 height:100vh;
	min-height:600px;
	/*background-image: url(ThemeproLO/Common/Images/FEP/Loginbanner.jpg);*/
	background-repeat: no-repeat;
	background-size:cover;
	background-position:center;
	position:relative;
    /*overflow-y: hidden;*/
	
		 }
		 
		 .md-form label {
    color: #4a478b;
    font-size: 1.1rem;
}
.md-form label.active {
	-webkit-transform: translateY(-100%);
        font-size: 1rem;
}
		.hidden-sn main {
    padding-top: 6rem;
} 

input[type=date], input[type=datetime-local], input[type=email], input[type=number], input[type=password], input[type=search-md], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], textarea.md-textarea {
     height: 2.1rem !important;
}
		
		label {
    margin-bottom: 0rem !important;
}
		 
		 </style>
</head>
 
<body class="hidden-sn white-skin">


			
    <!--Main layout-->
   <!-- <main class="">-->
        <div class="container-fluid LGNcontainer-fluid">
         

           
            <!--Section: Main Chart-->
            <section class="section">

  <!--First row-->
    <div class="row LGNGrdColr">
  
    <div class="col-md-6 LGNRow LGNRowBr" >
  

    <!-- <div class="LGNCenter">              
	<img  class="img-fluid" style="width: 20rem;" alt="Responsive image" src="ThemeproLO/Common/Images/Tvs_Logo.jpg">
	</div> 	 -->

     <div class="LGNCenter">              
<img  class="img-fluid" style="width: 20rem;" alt="Responsive image" src="ThemeproLO/Common/Images/TPT Logo.png">
	</div> 	  

</div>

       <div class="col-md-6 LGNRow">  

   <div class="LGNCenter">            
<button type="button" style="display:none" onclick="SignInPWD()" id="UPhide" class="btn btn-light" style="color: black!important;">Login with User ID & Password</button>
<button type="button" style="display:none" onclick="SignInOTP()" id="OTPhide" class="btn btn-light" style="color: black!important;">Login with Mobile OTP</button>
 </div>    
<div class="row" id="SingInUP" style="display:none;min-width: 100%;">
<div class="col-md-12">

<!--<div class="row card-body pt-3">-->
        <!--First column-->
		
		<div class="LGNDataPanel" >
		<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>
		<input type="hidden" id="UNA" value="${UNA}"/>
		<div class="row">
		
			 <div class="col-md-12">                                             
                                             	
                                                                                       
                                            </div>  
		
		 <div class="col-md-12">                                             
                                             	<p><font color="red"><label id="ErrorTXT"></label></font></p>  
												</br>
                                                                                       
                                            </div>  
                                           <!--  <div class="col-md-12">                                             
                                             	
                                               <div class="md-form">
											       <input type="text" id="TXTCode" name="TXTCode" class="form-control form-controlBTMMR">
                                                    <label for="TXTCode" class="">Company Code</label>
													                                                  
                                                </div>                                               
                                            </div>     --> 

											</div> 
											<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="text" id="TXTusername" name="TXTusername" maxlength="15" class="form-control NoSpecialChar form-controlBTMMR">
                                                    <label for="TXTusername" class="">Username</label>
													                                                  
                                                </div>                                               
                                            </div>   

</div> 
											<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="password" id="TXTpwd" name="TXTpwd" autocomplete="off" class="form-control form-controlBTMMR">
                                                    <label for="TXTpwd" class="">Password</label>
													                                                  
                                                </div>                                               
                                            </div>   											
							</div> 
											<div class="row">				
											<div class="col-md-12">                                             
                                             Captcha  
                                              <div>
<input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#0e8943;margin:5px 0px;float:left;border-radius: .4rem;width:45px;height:40px;" class="" id="txt1"/>
<div class="plus" style="padding: 16px 0;margin: 0px 4px;float: left;">+</div>  
<input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#0e8943;margin:5px 0px;float:left;border-radius: .4rem;width:45px;height:40px;" class="" id="txt2"/>
<div class="plus" style="padding: 16px 0;margin: 0px 4px;float: left;">=</div> 
<input type="text" onpaste="return false" style="border:1px solid #CCC;color:black;text-align: center;margin:5px 0px;float:left;border-radius: .4rem;width:45px;height:40px;" class="" id="txt3"/><img src="ThemeproLO/Common/Images/swap-arrows-refresh.png" title="Refresh" id="Refreshbtn" onclick="randomnum()" align=" right" style="display:none;width:20px;height:20px;cursor: pointer;"/>
</div>


			
										
                                        </div>
										
									

</div> 


									<!--		<div class="row">
										
		</div> 			-->					
			

			
</div>




<div class="LGNSignInDataPanel">		 
<div class="row">
<div class="col-md-12">                                         
                                             
  <div style="display: flex;justify-content: center">
<div><button type="button" value="Sign In" id="CheckSignInBtn1" class="btn btn-light waves-effect waves-light CheckSignInBtn" >Sign In</button></div>
<div><button type="button" style="display:none" value="Forgot Password?" onclick="FrgPwd()" id="CheckFrgPwd" class="btn btn-light waves-effect waves-light " style="color: black!important;">Forgot Password?</button></div>
<div><button type="button" style="display:none" value="Forgot Username?" onclick="FrgUsrNme()" id="CheckFrgUsrNme" class="btn btn-light waves-effect waves-light " style="color: black!important;">Forgot Username?</button></div>
</div>
</div>   		
</div> 
									<!--		<div class="row">
									
		</div> 			-->					
			
		
</div>

</div>


	   
			   
</div>
   

   <div class="row" id="PwdReset" style="display:none;min-width: 100%;">
<div class="col-md-12">

<!--<div class="row card-body pt-3">-->
        <!--First column-->
		
		<div class="LGNDataPanel" >
		<!--<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>-->
		<!--<input type="hidden" id="UNA" value="${UNA}"/>-->
		<div class="row">
		
			 <div class="col-md-12">                                             
                                             	
                                                                                       
                                            </div>  
		
		 <div class="col-md-12">                                             
                                             	<p><font color="red"><label id="ErrorTXTOTP"></label></font></p>  
												</br>
                                                                                       
                                            </div>  
                                            <div class="col-md-12">                                             
                                             	
                                               <div class="md-form">
											       <input type="text" id="TXTCodeOTP" name="TXTCodeOTP" class="form-control form-controlBTMMR">
                                                    <label for="TXTCodeOTP" class="">Company Code</label>
													                                                  
                                                </div>                                               
                                            </div>     

											</div> 
											<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="text" id="TXTusernameOTP" name="TXTusernameOTP" class="form-control form-controlBTMMR">
                                                    <label for="TXTusernameOTP" class="">Username</label>
													                                                  
                                                </div>                                               
                                            </div>   

</div> 
											<div class="row">
 
 		

 <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											      <button type="button" value="Get OTP" id="Getotp" class="btn btn-light waves-effect waves-light " onclick="GetMoblOTP();" style="color: black!important;">Get OTP</button>
													                                                  
                                                </div>                                               
                                            </div>   

 <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											       <input type="password" id="TXTOTP" name="TXTOTP" class="form-control form-controlBTMMR">
                                                    <label for="TXTOTP" class="">OTP</label>
													                                                  
                                                </div>                                               
                                            </div>   
											
							</div> 
 


									<!--		<div class="row">
										
		</div> 			-->					
			

			
</div>




<div class="LGNSignInDataPanel">		 
<div class="row">
<div class="col-md-12">                                         
                                             
  <div style="display: flex;justify-content: center">
<button type="button" value="Sign In" class="btn btn-light waves-effect waves-light CheckSignInBtnOTP" style="color: black!important;">Sign In</button>

</div>
</div>   		
</div> 
									<!--		<div class="row">
									
		</div> 			-->					
			
		
</div>

</div>


	   
			   
</div>
  
   
   
   <div class="row" id="FrgPwd" style="display:none;min-width: 100%;">
<div class="col-md-12">

<!--<div class="row card-body pt-3">-->
        <!--First column-->
		
		<div class="LGNDataPanel" >
		<!--<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>-->
		<!--<input type="hidden" id="UNA" value="${UNA}"/>-->
		<div class="row">
		
			 <div class="col-md-12">                                             
                                             	
                                                                                       
                                            </div>  
		
		 <div class="col-md-12">                                             
                                             	<p><font color="red"><label id="ErrorTXTFW"></label></font></p>  
												</br>
                                                                                       
                                            </div>  
                                            <div class="col-md-12">                                             
                                             	
                                               <div class="md-form">
											       <input type="text" id="TXTCodeFW" name="TXTCodeFW" class="form-control form-controlBTMMR">
                                                    <label for="TXTCodeFW" class="">Company Code</label>
													                                                  
                                                </div>                                               
                                            </div>     

											</div> 
											<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="text" id="TXTusernameFW" name="TXTusernameFW" class="form-control form-controlBTMMR">
                                                    <label for="TXTusernameFW" class="">Username</label>
													                                                  
                                                </div>                                               
                                            </div>   

</div> 
											<div class="row">
 
 		

 <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											      <button type="button" onclick="RstOTPPswd()" value="Get OTP" id="GetFPotp" class="btn btn-light waves-effect waves-light " style="color: black!important;">Get OTP</button>
													                                                  
                                                </div>                                               
                                            </div>   

 <div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											       <input type="password"  id="TXTOTPFW" name="TXTOTPFW" class="form-control form-controlBTMMR">
                                                    <label for="TXTOTPFW" class="">OTP</label>
													                                                  
                                                </div>                                               
                                            </div>   
											
							</div> 
 

<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="text" id="TXTNewPasswordFW" name="TXTNewPasswordFW" class="form-control form-controlBTMMR">
                                                    <label for="TXTNewPasswordFW" class="">New Password</label>
													                                                  
                                                </div>                                               
                                            </div>   

</div> 

<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="password" id="TXTCPasswordFW" name="TXTCPasswordFW" class="form-control form-controlBTMMR">
                                                    <label for="TXTCPasswordFW" class="">Confirm Password</label>
													                                                  
                                                </div>                                               
                                            </div>   

</div> 
									<!--		<div class="row">
										
		</div> 			-->					
			

			
</div>




<div class="LGNSignInDataPanel">		 
<div class="row">
<div class="col-md-12">                                         
                                             
  <div style="display: flex;justify-content: center">
<button type="button" value="Sign In" id="RstPswd" onclick="RstPswd()" class="btn btn-light waves-effect waves-light CheckSignInBtnRs" style="color: black!important;">Reset Password</button>

</div>
</div>   		
</div> 
									<!--		<div class="row">
									
		</div> 			-->					
			
		
</div>

</div>


	   
			   
</div>






<div class="row" id="FrgUsrName" style="display:none;min-width: 100%;">
<div class="col-md-12">

<!--<div class="row card-body pt-3">-->
        <!--First column-->
		
		<div class="LGNDataPanel" >
		<!--<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>-->
		<!--<input type="hidden" id="UNA" value="${UNA}"/>-->
		<div class="row">
		
			 <div class="col-md-12">                                             
                                             	
                                                                                       
                                            </div>  
		
										<div class="col-md-12">                                             
                                             	<p><font color="red"><label id="ErrorTXTFUN"></label></font></p>  
												</br>
                                                                                       
                                            </div>  
                                            <div class="col-md-12">                                             
                                             	
                                               <div class="md-form">
											       <input type="text" id="TXTCodeFUN" name="TXTCodeFUN" class="form-control form-controlBTMMR">
                                                    <label for="TXTCodeFUN" class="">Company Code</label>
													                                                  
                                                </div>                                               
                                            </div>     

											</div> 
											<div class="row">
										<div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="text" id="TXTusernameFUN" name="TXTusernameFUN" maxlength=10 class="form-control form-controlBTMMR">
                                                    <label for="TXTusernameFUN" class="">Mobile No</label>
													                                                  
                                                </div>                                               
                                            </div>   

											</div> 
											<div class="row">
 
 		

										<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											      <button type="button" onclick="RstOTPUsrNme()" value="Get OTP" id="GetFPotp" class="btn btn-light waves-effect waves-light " style="color: black!important;">Get OTP</button>
													                                                  
                                                </div>                                               
                                            </div>   

										<div class="col-md-6">                                             
                                               
                                               <div class="md-form">
											       <input type="password"  id="TXTOTPFUN" name="TXTOTPFUN" class="form-control form-controlBTMMR">
                                                    <label for="TXTOTPFUN" class="">OTP</label>
													                                                  
                                                </div>                                               
                                            </div>   
											
							</div> 
 
										<div class="col-md-12">                                             
                                             	<p><font color="blue"><label id="ErrorTXTFUNME"></label></font></p>  
												</br>
                                                                                       
                                            </div>  
	
</div>




<div class="LGNSignInDataPanel">		 
<div class="row">
<div class="col-md-12">                                         
                                             
  <div style="display: flex;justify-content: center">
<button type="button" value="Sign In" id="OTPUsrNmeVrfy" onclick="OTPUsrNmeVrfy()" class="btn btn-light waves-effect waves-light CheckSignInBtnRs" style="color: black!important;">Get UserName</button>

</div>
</div>   		
</div> 
									<!--		<div class="row">
									
		</div> 			-->					
			
		
</div>

</div>


	   
			   
</div>

</div>





</div>
</section>

        
   <!-- </main>-->
    <!--/Main layout-->
			     <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
 
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/Base64.js${DMY13}"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/Onload_Audit.js${DMY13}" type="text/javascript"></script>
 
 <script src="ThemeproLO/Common/scripts/Main/Login/login.js${DMY13}" type="text/javascript"></script>
  

		<!--</section>-->
	
	
		
		<!--<footer id="footer" class="page-footer center-on-small-only pt-0 mt-5 fixed-bottom">-->
			 
 
<!--Copyright-->
<!--<div class="footer-copyright">
<div class="container-fluid">
©2019 Adani Capital </a>
</div>
</div>-->
<!--/.Copyright-->
    <script>
        $("#navigation").load("components/navigation.html");
    </script>

    <!-- Bootstrap dropdown -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/popper.min.js${DMY13}"></script>

    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/bootstrap.min.js${DMY13}"></script>

    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/mdb.min.js${DMY13}"></script>
    
    <!-- Customizer -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/customizer.min.js${DMY13}"></script>
 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> -->
 
 <script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
 
	
	<script>
	
	 

function SignInPWD()
{
	
	$("#SingInUP").show();
	$("#UPhide").hide();
	$("#OTPhide").hide();
	$("#PwdReset").hide();
	$("#FrgPwd").hide();
	$("#FrgUsrName").hide();
	
}

function SignInOTP()
{
	
	$("#SingInUP").hide();
	$("#UPhide").hide();
	$("#OTPhide").hide();
	$("#PwdReset").show();
	$("#FrgPwd").hide();
	$("#FrgUsrName").hide();
	
}

function FrgPwd()
{
	
	$("#SingInUP").hide();
	$("#UPhide").hide();
	$("#OTPhide").hide();
	$("#PwdReset").hide();
	$("#FrgPwd").show();
	$("#FrgUsrName").hide();
	
}

function FrgUsrNme()
{
	
	$("#SingInUP").hide();
	$("#UPhide").hide();
	$("#OTPhide").hide();
	$("#PwdReset").hide();
	$("#FrgPwd").hide();
	$("#FrgUsrName").show();
}



</script>
<input type="hidden"  id="TXTIP" name="TXTIP" class="form-control form-controlBTMMR" />
 <script> 
        /* Add "https://api.ipify.org?format=json" statement 
           this will communicate with the ipify servers in 
           order to retrieve the IP address $.getJSON will 
           load JSON-encoded data from the server using a 
           GET HTTP request */ 
  
        $.getJSON("https://api.ipify.org?format=json", 
                                          function(data) { 
  
            // Setting text of element P with id TXTIP 
            $("#TXTIP").val(data.ip); 
        }) 
    </script> 
 
		<!--</footer>-->
		
</body>
</html>