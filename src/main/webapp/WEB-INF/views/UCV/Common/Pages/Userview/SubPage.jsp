<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
      <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>LSW</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>
    <!-- Bootstrap 3.3.5 -->
 
    <link href="ThemeproLO/Common/CSS/bootstrap/css/bootstrap.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
 
  <link href="ThemeproLO/Common/CSS/WinTabs.css${DMY13}" rel="stylesheet" type="text/css" />
  
    <!-- Font Awesome -->
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/font-awesome.min.css${DMY13}">
    <!-- Ionicons -->
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">
    <!-- Theme style -->
    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css${DMY13}" rel="stylesheet" type="text/css" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js${DMY13}"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js${DMY13}"></script>
    <![endif]-->
          
		 <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
		 
		 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
		
	       <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>
		   <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
		   <script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>
       <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>
	        
	   
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
		
		 
		
		  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/WinTabs.js${DMY13}"></script> 

    
<script src="ThemeproLO/Common/scripts/Main/SubPage/Onload.js${DMY13}" type="text/javascript"></script>
  <script src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}" type="text/javascript"></script>
      <script src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}" type="text/javascript"></script>
      <script src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}" type="text/javascript"></script>

	   <script src="ThemeproLO/Common/CSS/dist/js/app.min.js${DMY13}" type="text/javascript"></script>
	  
	  <script src="ThemeproLO/Common/scripts/UI/queuefrwd/googleapis/jquery-ui.min.js${DMY13}"></script>
	  
  </head>
  <body class="hold-transition skin-blue sidebar-mini">
  
    <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
	<input id="LoggedInUser" name="LoggedInUser" type="hidden" value=""/>
	
    <div class="wrapper">

      <header class="main-header">
        <!-- Logo -->
        <a href="#" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini">LSW</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><font size="4">Loan Sanction Workflow</font></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <div class="navbar-custom-menu">
		 
                    <ul  class="nav navbar-nav">
					 <li class="dropdown messages-menu"><i class="ion ion-ios-home"></i> <span id="Wel1"></span></br> <span id="Wel2"></span></li>
            <li onclick="HomeClick('ThemeproLO/Common/Pages/Userview/MainDashBoard.jsp');" class="dropdown messages-menu"><a href="#"><i class="ion ion-ios-home"></i> <span>Home</span></a></li>
            <li onclick="AppliLogout();" class="dropdown messages-menu"><a href="#"><i class="ion ion-log-out"></i> <span>Logout</span></a></li>
          
          </ul>
		  
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">


          </div>
          <!-- search form -->

          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <div id="Subpage"></div>
       
        </section>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
     <!-- /.content-wrapper -->


      <!-- Control Sidebar -->
      <!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
           <div class="content-wrapper">   
        
      <div class="control-sidebar-bg"></div>
     <section class="wrapper">
	 <div id="scroll-ul" style="overflow-x:auto">
	 <nav>
            <ul class="tabs">
                <li id="Tab1"><a href="#tab1"></a></li>
            </ul>
			</nav>
	</div>
            <div class="clr"></div>
            <section class="block">
                <article name="Tab1" id="tab1">
                    <p><iframe id="PageIframe" width="100%" src="" frameborder="0"></iframe> </p>
                </article>              
            </section>
        </section>    
  		
    </div><!-- ./wrapper -->


    </div>

 
  </body>
</html>
