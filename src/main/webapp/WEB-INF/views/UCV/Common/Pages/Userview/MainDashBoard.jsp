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
  
  <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/themes/ui-lightness/jquery-ui-1.10.3.custom.css${DMY13}">
<link href="ThemeproLO/Common/CSS/jquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
 <link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" /> 
  
 

    <!-- Font Awesome -->
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/font-awesome.min.css${DMY13}">
    <!-- Ionicons -->
 <link href="ThemeproLO/Common/CSS/Icons/ionicons.min.css${DMY13}" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="ThemeproLO/Common/CSS/dist/css/AdminLTE.min.css${DMY13}" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css${DMY13}" rel="stylesheet" type="text/css" />

	<!-- <link href="ThemeproLO/Common/CSS/UserView/TimeLineStyle.css${DMY13}" rel="stylesheet" type="text/css" />-->

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
					 <li class="dropdown messages-menu"><span id="Wel1"></span></br> <span id="Wel2"></span></li>
					<!--  <li onclick="HomeCltrg();" class="dropdown messages-menu"><a href="#"></i> <span>Home</span></a></li>-->
					 <!--<li onclick="HelpOptn();" class="dropdown messages-menu"><a href="#"> <span>Help</span></a></li>-->
					 <li onclick="Profile();" class="dropdown messages-menu"><a href="#"><i class="ion ion-android-person"></i> <span>Profile</span></a></li>
					 <li onclick="AppliLogout();" class="dropdown messages-menu"><a href="#"><i class="ion ion-log-out"></i> <span>Logout</span></a></li>
          
          </ul>
		  
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
     

      <!-- Content Wrapper. Contains page content -->
     <!-- /.content-wrapper -->
 

      <!-- Control Sidebar -->
      <!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
           <div class="">   
             
      <div class="control-sidebar-bg"></div>
     <section class="wrapper">
	
            <div class="clr"></div>
            <section class="block">
              		
					
<div class="row" style="margin-left:-5px;margin-right:2px;" id="MenuPageDashBoard"> 
   <br> <br>
<form id="SupplierDashboardAgent" name="SupplierDashboardAgent" class="form-container "  action=""  method="POST">

<div class="row">

 
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Sanction Limit</span>
              <span class="info-box-number"><small>&#8377;</small>15,00,00,000<small></small></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
		
		<!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Operative Limit</span>
              <span class="info-box-number"><small>&#8377;</small>14,00,00,000<small></small></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
		
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-red"><i class="fa fa-spinner"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Utilised Limit</span>
             <span class="info-box-number"><small>&#8377;</small>9,00,00,000<small></small></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->

        <!-- fix for small devices only -->
        <div class="clearfix visible-sm-block"></div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="info-box">
            <span class="info-box-icon bg-green"><i class="ion ion-ios-cart-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Available Limit</span>
             <span class="info-box-number"><small>&#8377;</small>5,00,00,000</span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
       
      </div>
	<div class="row">

<div class="col-md-8">
	
	<div class="row">

	  
	  <div class="col-md-6">	
<div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">My Payments</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>To be Paid</th> 
					<th>Already Paid</th>					
					<th>Status</th>   					
					<!--<th>Popularity</th>-->
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><small>&#8377;</small>9,00,00,000</td>
					<td><small>&#8377;</small>1,00,00,000</td>
                    <td><span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 90%</span>
					<span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 10%</span></td>    
                  </tr>
                  
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <!--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>-->
              <a href="javascript:void(0)" onclick="FncallwebserviceDashB(this, 'GetJsonBRID', { spname: 'SCF_sGetAllPayments', Param:'mrf', brid: 'Payments', MnuId: '' }, {  0: $('#EditPrgmID'),2: $('#OldPrcsID'), 3: $('#OldAccID')});" class="btn btn-sm btn-info btn-flat pull-right">View All Payments</a>
            </div>
            <!-- /.box-footer -->
          </div>	  
	  </div>
	  
	   <div class="col-md-6">	
<div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Accepted Receivables</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>Total Receivables</th>
                    <th>Amount</th>
                     <!--<th>Popularity</th>-->
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>10</td>
                    <td><small>&#8377;</small>50,00,000</td>                                       
                  </tr>                  
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <!--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>-->
              <a href="javascript:void(0)" onclick="FncallwebserviceDashB(this, 'GetJsonBRID', { spname: 'SCF_sGetAcceptedReceivables', Param:'mrf', brid: 'AcceptedReceivables', MnuId: '' }, {  0: $('#EditPrgmID'),2: $('#OldPrcsID'), 3: $('#OldAccID')});" class="btn btn-sm btn-info btn-flat pull-right">View All Receivables</a>
            </div>
            <!-- /.box-footer -->
          </div>	  
	  </div>
	  
	  </div>


<div class="row">
	  
	  <div class="col-md-6">	
<div class="box box-danger">
            <div class="box-header with-border">
              <h3 class="box-title">Due Details</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>Anchor </th>
                     <th>My Due </th>					
                    <!--<th>Popularity</th>-->
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><small>&#8377;</small>65,00,000 <span class="description-percentage text-green"><i class="fa fa-caret-up"></i></span></td>
					  <td><small>&#8377;</small>81,00,000 <span class="description-percentage text-red"><i class="fa fa-caret-down"></i></span></td>
                  </tr>
                 
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <!--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>-->
              <a href="javascript:void(0)" onclick="FncallwebserviceDashB(this, 'GetJsonBRID', { spname: 'SCF_sGetDueDetails', Param:'mrf', brid: 'DueDetails', MnuId: '' }, {  0: $('#EditPrgmID'),2: $('#OldPrcsID'), 3: $('#OldAccID')});" class="btn btn-sm btn-info btn-flat pull-right">View Due Details</a>
            </div>
            <!-- /.box-footer -->
          </div>	  
	  </div>


<div class="col-md-6">	
<div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">Transaction Listing</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>Disbursed</th>
                    <th>Repaid</th>
                    <th>Closing Balance</th>
                    <!--<th>Popularity</th>-->
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                     <td><small>&#8377;</small>10,00,00,000</td>
                     <td><small>&#8377;</small>1,00,00,000</td>
					  <td><small>&#8377;</small>9,00,00,000
					  <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 90%</span>
					<span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 10%</span></td>
                    
                  </tr>
                
                 
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <!--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>-->
              <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-right">Transaction Details</a>
            </div>
            <!-- /.box-footer -->
          </div>	  
	  </div>
	  
	

<div class="col-md-6">	
<div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">My Relationships</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>				    
                    <th>Programme ID</th>
					<th>Programme Name</th>
					<th>Programme Expiry</th>
                  
			<!--<th>Popularity</th>-->
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
				    <td><a class="LoadPrgm" href="#">PRG000009</a></td>
                    <td>Tata Motors</td>
                    <td>09-04-2020</td>
                   
					                   
                  </tr>
                      <tr>
				    <td><a class="LoadPrgm" href="#">PRG000018</a></td>
                    <td>TTM</td>
                    <td>15-02-2023</td>				                   
                 </tr>
				      <tr>
				    <td><a class="LoadPrgm" href="#">PRG000025</a></td>
                    <td>TATA</td>
                    <td>15-05-2021</td>				                   
                 </tr>
				      <tr>
				    <td><a class="LoadPrgm" href="#">PRG000032</a></td>
                    <td>JK</td>
                    <td>15-08-2022</td>				                   
                 </tr>
                  
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <!--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>-->
              <!--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-right">Detailed Info</a>-->
            </div>
            <!-- /.box-footer -->
          </div>	  
</div>	  
<div class="col-md-6">		
<div class="box">
                <div class="box-header with-border">
                  <h3 class="box-title">Communication</h3>

                  <div class="box-tools pull-right">
                    
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                   
                    </button>
                  </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body no-padding">
                  <ul class="users-list clearfix">
                    <li>                     
                      <a class="users-list-name" href="#">Tata Motors</a>
                      <span class="users-list-date">Anchor</span>
                    </li>
                    <li>
                    
                      <a class="users-list-name" href="#">TTM</a>
                      <span class="users-list-date">Anchor</span>
                    </li>
                    <li>
                     
                      <a class="users-list-name" href="#">TATA</a>
                      <span class="users-list-date">Anchor</span>
                    </li>
                    <li>
                     
                      <a class="users-list-name" href="#">JK</a>
                      <span class="users-list-date">Anchor</span>
                    </li>
                                   <li>
                      
                      <a class="users-list-name" href="#">Query</a>
                      <span class="users-list-date">Bank</span>
                    </li>
                   
                  </ul>
                  <!-- /.users-list -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer text-center">
                  <span></span>
                </div>
                <!-- /.box-footer -->
              </div>	
</div>	  
</div>
</div>

<div class="col-md-4">
<a href="#" id="CreateInv">
<div class="info-box bg-yellow" >
            <span class="info-box-icon"><i class="fa fa-file-o"></i></span>

            <div class="info-box-content">
              <span class="info-box-number">Create Invoice</span>
			  <span class="info-box-Text">Total Invoice Created: 150</span>
           
            </div>
            <!-- /.info-box-content -->
          </div></a>

 <a href="#" id="InvPayable">
<div class="info-box bg-yellow" >
            <span class="info-box-icon"><i class="fa fa-opencart"></i></span>

            <div class="info-box-content">
              <span class="info-box-number">Invoice Payable</span>
			
		
           
            </div>
            <!-- /.info-box-content -->
          </div></a>
		  

<a href="#" id="AcceptPO">
<div class="info-box bg-green">
            <span class="info-box-icon"><i class="ion ion-ios-pricetag-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-number">Accept PO</span>
             

              <div class="progress">
                <div class="progress-bar" style="width: 20%"></div>
              </div>
              <span class="progress-description">
                    80% Pending PO to be Accepted
                  </span>
            </div>
            <!-- /.info-box-content -->
          </div></a>
		 
<a href="#" id="ReqFinc">	  
<div class="info-box bg-aqua">
            <span class="info-box-icon"><i class="fa fa-rupee"></i></span>

            <div class="info-box-content">
              <span class="info-box-number">Request Finance</span>
              
              <div class="progress">
                <div class="progress-bar" style="width: 60%"></div>
              </div>
              <span class="progress-description">
                    40% Finance To be Requested
                  </span>
            </div>
            <!-- /.info-box-content -->
          </div></a>		  


<div class="info-box bg-white">
            <span class="info-box-icon"><i class="fa fa-bar-chart-o"></i></span>

            <div class="info-box-content">
              <span class="info-box-number">Reports</span>
              
             <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li id="SOA"><a href="#">SOA <span class="pull-right badge bg-blue"><i class="fa fa-arrow-right"></i></span></a></li>
                <li id="DA"><a href="#">Disbursement Advice <span class="pull-right badge bg-blue"><i class="fa fa-arrow-right"></i></span></a></li>
                <li id="RA"><a href="#">Repayment Advice <span class="pull-right badge bg-blue"><i class="fa fa-arrow-right"></i></span></a></li>
                <li id="IA"><a href="#">Interest Advice <span class="pull-right badge bg-blue"><i class="fa fa-arrow-right"></i></span></a></li>
				<li id="RFA"><a href="#">Refund Advice <span class="pull-right badge bg-blue"><i class="fa fa-arrow-right"></i></span></a></li>
              </ul>
            </div>		
			 
            </div>
            <!-- /.info-box-content -->
          </div>


</div>


 </div>

 <div id="popup" class="SearchList">
            <table id="Table1" class="display" border="0"></table>
        </div>


</form>
   


        </div>	
		
		</br>

           
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

<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min.js${DMY13}"></script>	
	
	 <script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>


<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/grid.locale-en.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/jquery.jqGrid.min.js${DMY13}"></script> 

<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/jquery-ui.min.js${DMY13}"></script>
<!--<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/LoadGrid.js${DMY13}"></script> -->
<script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/prettify.js${DMY13}"></script> 

	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/jquery-ui.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/prettify.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/ui.jqgrid.css${DMY13}">
	  <link rel="stylesheet" href="ThemeproLO/Common/CSS/Grid/NewDashGrid.css${DMY13}">


	 
	<!--  <script type="text/javascript" src="ThemeproLO/Common/scripts/Grid/loadjson_V_19.js${DMY13}"></script> -->
 
	    <script src="ThemeproLO/Common/scripts/Main/MainDashBoard/Onload.js${DMY13}" type="text/javascript"></script>
		
 <!--   <script src="ThemeproLO/Common/scripts/Main/MainDashBoard/modernizr.js${DMY13}" type="text/javascript"></script>
  <script src="ThemeproLO/Common/scripts/Main/MainDashBoard/TimeLineLoad.js${DMY13}" type="text/javascript"></script>-->
 
</html>
