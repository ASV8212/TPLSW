<html>
<head>
	    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	
	<title>ThemePro SCF- FEP Login</title>
	
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/jquery-ui.css${DMY13}">
 <!-- <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/prettify.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/ui.jqgrid.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/NewGrid.css${DMY13}"> --> 

 <link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />  


<!--  <link href="ThemeproLO/Common/CSS/responsive.dataTables.min.css${DMY13}" rel="stylesheet" type="text/css" />--> 

  <!-- Font Awesome -->
    <link rel="stylesheet" href="ThemeproLO/Common/FEP/css/font-awesome.min.css${DMY13}">

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
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
    
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
   
	 <!--<script>history.pushState('', '', window.location.pathname)</script>-->
	 
	     <style type="text/css">
		 
		 body{
			 height:100vh;
	min-height:600px;
	background-image: url(ThemeproLO/Common/Images/FEP/Loginbanner.jpg);
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
		 
		 
		 </style>
</head>
 
<body class="hidden-sn white-skin">


			
    <!--Main layout-->
    <main class="">
        <div class="container-fluid">
         

           
            <!--Section: Main Chart-->
            <section class="section">

  <!--First row-->
    <div class="row LGNGrdColr">
  
    <div class="col-md-6 LGNRow LGNRowBr" >
  

               
<img  class="img-fluid" style="width: 25rem;" alt="Responsive image" src="ThemeproLO/Common/Images/adani-logo.png">
			   

</div>

       <div class="col-md-6 LGNRow">
  

               
<button type="button" onclick="SignInPWD()" id="UPhide" class="btn btn-light" style="color: black!important;">Login with User ID & Password</button>

<div class="row" id="SingInUP" style="display:none;">
<div class="col-md-12">

<!--<div class="row card-body pt-3">-->
        <!--First column-->
		
		<div class="LGNDataPanel">
		<input type="hidden" id="SubmitSuccess" name="SubmitSuccess"/>
		<div class="row">
		
			 <div class="col-md-12">                                             
                                             	
                                                                                       
                                            </div>  
		
		 <div class="col-md-12">                                             
                                             	<p><font color="red"><label id="ErrorTXT"></label></font></p>  
												</br>
                                                                                       
                                            </div>  
                                            <div class="col-md-12">                                             
                                             	
                                               <div class="md-form">
											       <input type="text" id="TXTCode" name="TXTCode" class="form-control">
                                                    <label for="TXTCode" class="">Company Code</label>
													                                                  
                                                </div>                                               
                                            </div>     

											</div> 
											<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="text" id="TXTusername" name="TXTusername" class="form-control">
                                                    <label for="TXTusername" class="">Username</label>
													                                                  
                                                </div>                                               
                                            </div>   

</div> 
											<div class="row">
  <div class="col-md-12">                                             
                                               
                                               <div class="md-form">
											       <input type="password" id="TXTpwd" name="TXTpwd" class="form-control">
                                                    <label for="TXTpwd" class="">Password</label>
													                                                  
                                                </div>                                               
                                            </div>   											
							</div> 
											<div class="row">				
											<div class="col-md-12">                                             
                                               
                                              <div>
<input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#afe2fa;margin:5px 0px;float:left;border-radius: 35px;width:45px;height:40px;" class="" id="txt1"/>
<div class="plus" style="padding: 0px 0;margin: 0px 4px;float: left;">+</div>  
<input type="text" disabled="" onpaste="return false" style="color:black;text-align: center;background-color:#afe2fa;margin:5px 0px;float:left;border-radius: 35px;width:45px;height:40px;" class="" id="txt2"/>
<div class="plus" style="padding: 16px 0;margin: 0px 4px;float: left;">=</div> 
<input type="text" style="border:1px solid #CCC;height:40px;width:50px;padding:0px;box-shadow:1px 1px 5px #CCC" onpaste="return false" class="" id="txt3"/><img src="ThemeproLO/Common/Images/swap-arrows-refresh.png" title="Refresh" id="Refreshbtn" onclick="randomnum()" align=" right" style="display:none;width:20px;height:20px;cursor: pointer;"/>
</div>
	   					
										
                                        </div>

</div> 
											<div class="row">
										  <div class="col-md-12">                                         
                                             
    <input type="button" value="Sign in" class="btn btn-primary CusGrdColr" id="CheckSignInBtn"/>                                         
                                            </div>   		
		</div> 								
			

			
</div>
</div>


	   
			   
</div>
                      

</div>

</section>

        </div>
    </main>
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
Â©2019 Adani Capital </a>
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
	
}

</script>
 
		<!--</footer>-->
</body>
</html>