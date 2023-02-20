<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <title>SCF V1.0 | Application</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

   <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min_Dashboard.js${DMY13}"></script>
    <!-- Bootstrap 3.3.5 -->

    <link href="ThemeproLO/Common/CSS/bootstrap/css/bootstrap.min.css${DMY13}" rel="stylesheet" type="text/css" />
	
	  <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
  
    <!-- Font Awesome -->
   <!-- <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/font-awesome.min.css${DMY13}">-->
    <!-- Ionicons -->

    <!-- Theme style -->
    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css${DMY13}" rel="stylesheet" type="text/css" />

	 <link href="ThemeproLO/Common/CSS/UserView/TimeLineStyle.css${DMY13}" rel="stylesheet" type="text/css" />

 <!--	<script src="ThemeproLO/Common/scripts/Chart/ChartReference/tiscore.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisdraw.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tischart.core.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisdata.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisbuttons.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisscrollbar.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tismenu.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tislistbox.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisdropdownlist.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisgrid.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisgrid.selection.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisgrid.pager.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tisgrid.filter.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/tischeckbox.js${DMY13}" type="text/javascript"></script>
    <script src="ThemeproLO/Common/scripts/Chart/ChartReference/demos.js${DMY13}" type="text/javascript"></script>
   <script src="ThemeproLO/Common/scripts/Chart/LoadChart.js${DMY13}" type="text/javascript"></script>
   
  <script src="../../CSS/plugins/chartjs/Chart.min.js${DMY13}" type="text/javascript"></script>-->
	  
  </head>
  <body class="hold-transition skin-blue sidebar-mini" style="overflow-x: hidden;overflow-y: hidden">
  
    <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>
	<input id="LoggedInUser" name="LoggedInUser" type="hidden" value=""/>
	
	

    <div class="wrapper">
      <header class="main-header">
        <!-- Logo -->
        <a href="#" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><font size="3">SCF</font></span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><font size="3">Supply Chain Finance</font></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="" style="padding-left:0px;" data-toggle="offcanvas" role="button">
		  <img style="width: 20px; height: 20px;" src="ThemeproLO/Common/Images/arrowboth.png" />
            <span class="sr-only">Toggle navigation</span>
			</a>
          <div class="navbar-custom-menu">
		 <input id="Prvnt" name="Prvnt" type="hidden" value="${Prvnt}"/>
                    <ul  class="nav navbar-nav">
					 <li class="dropdown messages-menu"><i class="ion ion-ios-home"></i> <span id="Wel1"></span></br> <span id="Wel2"></span></li>
					  <li onclick="HomeCltrg();" class="dropdown messages-menu"><a href="#"><i class="ion ion-ios-book-outline"></i> <span>Home</span></a></li>
					 <!--<li onclick="HelpOptn();" class="dropdown messages-menu"><a href="#"><i class="ion ion-ios-book-outline"></i> <span>Help</span></a></li>-->
					 <li onclick="Profile();" class="dropdown messages-menu"><a href="#"><i class="ion ion-android-person"></i> <span>Profile</span></a></li>
					 <li onclick="AppliLogout();" class="dropdown messages-menu"><a href="#"><i class="ion ion-log-out"></i> <span>Logout</span></a></li>
          
          </ul>
		  
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar sideborder">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">


          </div>
          <!-- search form -->

          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <div id="MenuPageSideBar"></div>
 
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
	 <div id="scroll-ul">
	 <nav>
            <ul class="tabs">
                <li onclick="" id="Tab1"><a href="#tab1">Home</a></li>
            </ul>
			</nav>
	</div>
            <div class="clr"></div>
            <section class="block">
                <article name="Tab1" id="tab1">
                    <p><iframe style="display:none" id="PageIframe" width="100%" src="" frameborder="0"></iframe>
					
					
<div id="MenuTimeLine">
<section class="cd-horizontal-timeline">
	<div class="timeline">
		<div class="events-wrapper">
			<div class="events">
				<ol id='nodesList'>
					<li><a href="#0" class="selected">Home</a></li>
				</ol>
				<span class="filling-line" aria-hidden="true"></span>
			</div>
		</div> 
	</div>
</section>
</div>					
							
					
<div class="row" style="margin-left:-5px;margin-right:2px;" id="MenuPageDashBoard"> 
           
          

        </div>	
		
		</br>
<div id="InboxList" style="overflow-x:auto;">		
<table>
<tr>
	<td style="width:75%"> 
 <ul class="DBtabs">
 
 <span>
<!--My Inbox-->
 </span>
				
				<li id="Tab1" onclick="InboxList('Programme',this);"><a href="#tab1">Programme</a></li>
				
				<li id="Tab0" onclick="InboxList('',this);"><a href="#tab0">Inbox</a></li>
                
				
            </ul>


 <table id="Table3"></table>

    <div id="Table3Pager"></div>
	</td>
	<td style="width:25%"> 
                <!--style="width: 100%; height: 300px;cursor: default; "-->
            <!--<div style="width: 420px;; height: 200px;cursor: default;" id="pieChart" ></div>-->
			</td>
</tr>
</table>
	
</div>	



			
	</p>
                </article>              
            </section>
        </section>    
  		
    </div><!-- ./wrapper -->


    </div>

 <div style="display:none" id="SidePopup">
  <section class="sidebar">
 <div  id="MenuPagePopup">
 
  </div>
  </section>
  </div>
  </body>
  
<link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
<link href="ThemeproLO/Common/CSS/WinTabs.css${DMY13}" rel="stylesheet" type="text/css" />  
  
  <script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>
 <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
	  
	  	     <script src="ThemeproLO/Common/CSS/dist/js/app.min.js${DMY13}" type="text/javascript"></script>
	   
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
		  <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/WinTabs.js${DMY13}"></script> 
		  

	<script src="ThemeproLO/Common/scripts/Grid/jquery.dataTables.js${DMY13}" type="text/javascript"></script>

<script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>


<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/grid.locale-en.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/jquery.jqGrid.min.js${DMY13}"></script> 

<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/jquery-ui.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/LoadGrid.js${DMY13}"></script> 
<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/prettify.js${DMY13}"></script> 

	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/jquery-ui.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/prettify.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/ui.jqgrid.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/NewGrid.css${DMY13}">
	  
	  <script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/loadjson_V_19.js${DMY13}"></script>  
 
	    <script src="ThemeproLO/Common/scripts/Main/DashBoard/Onload.js${DMY13}" type="text/javascript"></script>
		
    <script src="ThemeproLO/Common/scripts/Main/DashBoard/modernizr.js${DMY13}" type="text/javascript"></script>
  <script src="ThemeproLO/Common/scripts/Main/DashBoard/TimeLineLoad.js${DMY13}" type="text/javascript"></script>
 
</html>
