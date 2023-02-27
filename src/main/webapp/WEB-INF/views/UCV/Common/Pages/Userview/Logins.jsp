<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> 

<html lang="en"> <!--<![endif]-->

<!-- BEGIN HEAD -->
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <title>LSW V1.0 | Login</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
     <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <!-- GLOBAL STYLES -->
     <!-- PAGE LEVEL STYLES -->
	 
 
  	 <link href="ThemeproLO/Common/CSS/LoginNew.css${DMY13}" rel="stylesheet" type="text/css" />
 
	 	
	 
<link rel="stylesheet"  href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}"  type="text/css"/>
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}"  type="text/css"/>
	 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
	<!--  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">-->

  <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>
	     <!--  <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>-->
		   <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
		     <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
 
 
     <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>
 
 <script src="ThemeproLO/Common/scripts/Main/Login/Onload.js${DMY13}" type="text/javascript"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/bootstrap.js${DMY13}" type="text/javascript"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/login.js${DMY13}" type="text/javascript"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
  
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/WebSocket.js${DMY13}"></script>
  
 
</head>
    <!-- END HEAD -->

    <!-- BEGIN BODY -->
<body>

<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>

<form id="LoginForm" class="form-signin"  >
<img class="encorethemelogo" src="ThemeproLO/Common/Images/encorethemelogo.png">
<img class="chfllogo" src="ThemeproLO/Common/Images/CHFLlogo.jpg">

<div class="logocontnt">
 

</font>
			
		

</div>
  <div class="container">

      <div id="login">

        <h2 align="center"><span class="fontawesome-lock"></span>ThemePro - Loan Sanction Workflow</h2>


		<div class ="loginsubmt">
	
          <fieldset class="subcontent">
			
            <p><label for="email">Username</label></p>
            <p><input type="text" id="TXTusername" class="form-control"  placeholder=""></p>

            <p><label for="password">Password</label></p>
            <p><input type="password" placeholder="" id="TXTpwd" class="form-control"  /></p>
			<p><table style="">
<tr>
 <p><label>Captcha</label></p> 
 <td><img src="ThemeproLO/Common/Images/swap-arrows-refresh.png" title="Refresh" id="Refreshbtn" onclick="randomnum()();" align=" right" style="width:20px;height:20px;cursor: pointer;">
 </td>
<td><input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#afe2fa;margin:5px 0px;float:left;border-radius: 55px;width:65px;height:40px;" class="" id="txt1"> </td>
<td><div class="plus" style="padding: 0px 0;margin: 0px 7px;float: left;">+</div>  </td>
<td><input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#afe2fa;margin:5px 0px;float:left;border-radius: 55px;width:65px;height:40px;" class="" id="txt2"></td>
<td><div class="plus" style="padding: 16px 0;margin: 0px 7px;float: left;">=</div> </td>
<td>&nbsp;<input type="text" style="border:1px solid #CCC;height:40px;width:50px;padding:0px;box-shadow:1px 1px 5px #CCC" onpaste="return false" class="" id="txt3"> </td>
</tr>
</table></p>

            <p> <input type="button" value="Sign in" class="lobtn text-muted text-center btn-danger" id="CheckSignInBtn"/>
			<font id="RightSD" size="2px"> Powered By Encore Theme Technologies
<img style="height:16px;width:12px" src="ThemeproLO/Common/Images/encorelogo.png">
</font>
			
			</p>

          </fieldset>
</div>
 

      </div> <!-- end login -->

    </div>

 
 </form>
 
 
	  <!--END PAGE CONTENT -->     
	  <!-- PAGE LEVEL SCRIPTS -->
      <!--END PAGE LEVEL SCRIPTS -->
</body>
    <!-- END BODY -->
</html>


  