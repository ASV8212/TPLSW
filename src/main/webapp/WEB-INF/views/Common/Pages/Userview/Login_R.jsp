<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> 

<html lang="en"> <!--<![endif]-->

<!-- BEGIN HEAD -->
<head>
    <meta charset="UTF-8" />
    <title>LSW | Login Page</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
     <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <!-- GLOBAL STYLES -->
     <!-- PAGE LEVEL STYLES -->
	 
  <link href="ThemeproLO/Common/CSS/Login/Login.css${DMY13}"  rel="stylesheet" type="text/css" />
    <link href="ThemeproLO/Common/CSS/Login/magic.css${DMY13}"  rel="stylesheet" type="text/css" />
	 <link href="ThemeproLO/Common/CSS/Login/bootstrap.css${DMY13}"  rel="stylesheet" type="text/css" />
	 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}"  type="text/css">

	 
<link rel="stylesheet"  href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}"  type="text/css">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}"  type="text/css">
	 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
 
	       <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>
		   <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
		     <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
 <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
 
 
     <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>
 
 <script src="ThemeproLO/Common/scripts/Main/Login/Onload.js${DMY13}" type="text/javascript"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/bootstrap.js${DMY13}" type="text/javascript"></script>
 <script src="ThemeproLO/Common/scripts/Main/Login/login.js${DMY13}" type="text/javascript"></script>
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
  
  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
  
  
  
  
     <!-- END PAGE LEVEL STYLES -->
   <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js${DMY13}"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js${DMY13}"></script>
    <![endif]-->
</head>
    <!-- END HEAD -->

    <!-- BEGIN BODY -->
<body>
 
<div id="background">

<img src="ThemeproLO/Common/Images/b_001.jpg" id="fig34" alt="bgimage" />

 <input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>

   <!-- PAGE CONTENT --> 
    <div class="divfloat">
       <figure>
        
      
       
        <figcaption ><h2><span>Loan Sanction Workflow</span></h2></figcaption>
        </figure>
       
    <div class="tab-content" >
        <div id="login" class="tab-pane active" >
            <form id="LoginForm" class="form-signin"  >
                <p class="text-muted text-center btn-block btn btn-primary btn-rect">Enter valid login credentials</p>
                <input type="text" placeholder="Username" id="TXTusername" class="form-control" />
                <input type="password" placeholder="Password" id="TXTpwd" class="form-control"  />
                <input type="button" value="Sign in" class="btn text-muted text-center btn-danger" id="CheckSignInBtn"/>
           
        <ul class="list-inline form-signin">
           <li ><a class="text-muted" href="#" id="ForgotA" data-toggle="tab">Forgot Password</a></li>
        </ul>
               </form>
        </div>
        <div  style="display:none" id="forgot" class="tab-pane">
            <form   id="ForgotForm" class="form-signin" >
                <p class="text-muted text-center btn-block btn btn-primary btn-rect">Enter valid recovery e-mail</p>
                <input type="email"  required="required" placeholder="Your E-mail"  class="form-control" />
                <br />
                <button class="btn text-muted text-center btn-success" type="submit">Recover Password</button>
             
        <ul class="list-inline form-signin">
            <li ><a class="text-muted" href="#" id="LoginA" data-toggle="tab">Login</a></li>
        </ul>
   
            </form>
        </div>
               
    </div>
   


</div>
</div>
	  <!--END PAGE CONTENT -->     
	  <!-- PAGE LEVEL SCRIPTS -->
      <!--END PAGE LEVEL SCRIPTS -->
</body>
    <!-- END BODY -->
</html>


  