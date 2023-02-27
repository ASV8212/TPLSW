<!DOCTYPE html>
<html lang="en">
<head>
	<title>ThemePro - SCF</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/png" href="ThemeproLO/Common/Images/encorelogo.png"/>
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/vendor/bootstrap/css/bootstrap.min.css${DMY13}">
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/fonts/font-awesome-4.7.0/css/font-awesome.min.css${DMY13}">
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/fonts/Linearicons-Free-v1.0.0/icon-font.min.css${DMY13}">
<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/vendor/animate/animate.css${DMY13}">
	<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/vendor/css-hamburgers/hamburgers.min.css${DMY13}">
	<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/vendor/animsition/css/animsition.min.css${DMY13}">
	<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/vendor/select2/select2.min.css${DMY13}">
	<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/vendor/daterangepicker/daterangepicker.css${DMY13}">
	<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/css/util.css${DMY13}">
	<link rel="stylesheet" type="text/css" href="ThemeproLO/Common/LOGIN/css/main.css${DMY13}">
	

	<!--  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">-->

  <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>
	     <!--  <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>-->
		   <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
		     <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
 
 
   <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/Base64.js${DMY13}"></script>

     <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>
 
 <script src="ThemeproLO/Common/scripts/Main/Login/Onload.js${DMY13}" type="text/javascript"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/bootstrap.js${DMY13}" type="text/javascript"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/login.js${DMY13}" type="text/javascript"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
  
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
 
	
</head>
<body>
	<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>
	<input id="Prvnt" name="Prvnt" type="hidden" value="${Prvnt}" />
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form-title" style="background-image: url(ThemeproLO/Common/LOGIN/images/scf.jpg);">
					<span class="login100-form-title-1">
						ThemePro - Supply Chain Finance
					</span>
					<span class="Logi">"Platform to Power & Simplify
					</br>
					Supply Chain Financing"</span>
				</div>

				<form class="login100-form validate-form">
			
				<p><font color="red"><label id="ErrorTXT"></label></font></p>
				
					<div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span class="label-input100">Username</span>
						<input class="input100 NoSpecialChar" type="text" name="TXTusername" maxlength="15" id='TXTusername' placeholder="Enter username">
						<span class="focus-input100"></span>
					</div>
					<div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="TXTpwd" id='TXTpwd' placeholder="Enter password">
						<span class="focus-input100"></span>
					</div>
	
<table style="">
<tr>
 <p><label>Captcha</label></p> 
 <td><img src="ThemeproLO/Common/Images/swap-arrows-refresh.png" title="Refresh" id="Refreshbtn" onclick="randomnum()" align=" right" style="width:20px;height:20px;cursor: pointer;">
 </td>
<td><input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#afe2fa;margin:5px 0px;float:left;border-radius: 55px;width:65px;height:40px;" class="" id="txt1"> </td>
<td><div class="plus" style="padding: 0px 0;margin: 0px 7px;float: left;">+</div>  </td>
<td><input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#afe2fa;margin:5px 0px;float:left;border-radius: 55px;width:65px;height:40px;" class="" id="txt2"></td>
<td><div class="plus" style="padding: 16px 0;margin: 0px 7px;float: left;">=</div> </td>
<td>&nbsp;<input type="text" style="border:1px solid #CCC;height:40px;width:50px;padding:0px;box-shadow:1px 1px 5px #CCC" onpaste="return false" class="" id="txt3"> </td>
</tr>
</table>
				
					
					
					
					<div class="container-login100-form-btn">
						<input type="button" value="Sign in" class="login100-form-btn" id="CheckSignInBtn"/>
					</div>
			
							<div class="flex-sb-m w-full p-b-30">
						<div>
							<a href="#" class="txt1" onclick="GetPassword()">
								Forgot Password?
							</a>
						</div>
					</div>
					<font id="RightSD" size="2px"> Powered By Encore Theme Technologies
<img style="height:16px;width:12px" src="ThemeproLO/Common/Images/encorelogo.png">
</font>
				</form>
			</div>
		</div>
	</div>
	

	<script src="ThemeproLO/Common/LOGIN/vendor/jquery/jquery-3.2.1.min.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/animsition/js/animsition.min.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/bootstrap/js/popper.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/bootstrap/js/bootstrap.min.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/select2/select2.min.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/daterangepicker/moment.min.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/daterangepicker/daterangepicker.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/vendor/countdowntime/countdowntime.js${DMY13}"></script>
	<script src="ThemeproLO/Common/LOGIN/js/main.js${DMY13}"></script>

</body>
</html>