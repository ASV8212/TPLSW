<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<html>
<head>
	    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	
	<title><tiles:getAsString name="title" /></title>
	
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
    <link href="ThemeproLO/Common/FEP/css/Dashboard.css${DMY13}" rel="stylesheet">
	
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
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng_V1.js?jver=1"></script>
    
	      <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}" ></script>        		
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}" ></script>
		  <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}" ></script>	
		  <script type="text/javascript" src="ThemeproLO/Forms/Script/MyApplTabs.js${DMY13}"></script>
   
	 <!--<script>history.pushState('', '', window.location.pathname)</script>-->
	 <script>$(function(){ document.body.style.zoom = "90%"});</script>
</head>
 
<body class="hidden-sn white-skin">

 <!-- Customizer -->


 
 

  <div style="display:none" id="customizer" class="z-depth-1">
  <a href="#" id="toggle" data-toggle="tooltip" data-placement="left" onclick="goBack()" title="Click to Go Back!"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></a>
  
  </div>

 
    <div style="display:none" id="customizer" class="z-depth-1">
        <a href="#" id="toggle" data-toggle="tooltip" data-placement="left" title="Customize your template!"><i class="fa fa-cog" aria-hidden="true"></i></a>
        <div class="inner">
            <p class="text-center customizer-heading">Pick a skin color</p>
            <ul class="skins-list">
                <li><a href="#" data-skin-color="deep-purple-skin"><span class="color skin-deep-purple"></span></a></li>
                <li><a href="#" data-skin-color="navy-blue-skin"><span class="color skin-navy-blue"></span></a></li>
                <li><a href="#" data-skin-color="cyan-skin"><span class="color skin-cyan"></span></a></li>
                <li><a href="#" data-skin-color="pink-skin"><span class="color skin-pink"></span></a></li>
                <li><a href="#" data-skin-color="indigo-skin"><span class="color skin-indigo"></span></a></li>
                <li><a href="#" data-skin-color="light-blue-skin"><span class="color skin-light-blue"></span></a></li>
                <li><a href="#" data-skin-color="grey-skin"><span class="color skin-grey"></span></a></li>
                <li><a href="#" data-skin-color="white-skin"><span class="color skin-white"></span></a></li>
                <li><a href="#" data-skin-color="black-skin"><span class="color skin-black"></span></a></li>
                <li><a href="#" data-skin-color="mdb-skin"><span class="color skin-mdb"></span></a></li>
            </ul>
          <div style="display:none">
                <p class="text-center customizer-heading d-inline">Fixed sidenav</p>
                <div class="switch d-inline-block float-right">
                    <label>
                        Off
                        <input id="FSN" type="checkbox" checked="checked">
                        <span class="lever"></span> On
                    </label>
                    
                </div>
            </div>

            <input id="Prvnt" name="Prvnt" type="hidden" value="${Prvnt}"/>
            <input id="NxAction" name="NxAction" type="hidden" value="${Action}"/>
            <input id="LogUsr" name="LogUsr" type="hidden" value="${User}"/>
            <input id="CpmCd" name="CpmCd" type="hidden" value="${CpmCd}"/>
            <input id="WFURL" name="WFURL" type="hidden" value="${WFURL}"/>
			<input id="FormAction" name="FormAction" type="hidden" value="${FormAction}"/>
			<input id="FormColor" name="FormColor" type="hidden" value="${FormColor}"/>
			<input id="FormName" name="FormName" type="hidden" value="${FormName}"/>
			<input id="VERTICAL" name="VERTICAL" type="hidden" value="${VERTICAL}"/>
			
			<input id="PrMs1" name="PrMs1" type="hidden" value="${PrMs1}"/>
			<input id="PrMs2" name="PrMs2" type="hidden" value="${PrMs2}"/>
			<input id="PrMs3" name="PrMs3" type="hidden" value="${PrMs3}"/>
			<input id="PrMs4" name="PrMs4" type="hidden" value="${PrMs4}"/>
			<input id="PrMs5" name="PrMs5" type="hidden" value="${PrMs5}"/>
			<input id="PrMs6" name="PrMs6" type="hidden" value="${PrMs6}"/>
			<input id="PrMs7" name="PrMs7" type="hidden" value="${PrMs7}"/>
			<input id="PrMs8" name="PrMs8" type="hidden" value="${PrMs8}"/>
			<input id="PrMs9" name="PrMs9" type="hidden" value="${PrMs9}"/>
			<input id="PrMs10" name="PrMs10" type="hidden" value="${PrMs10}"/>
            <input id="DMY1" name="DMY1" type="hidden" value="${DMY1}"/>
            <input id="DMY2" name="DMY2" type="hidden" value="${DMY2}"/>
            <input id="DMY3" name="DMY3" type="hidden" value="${DMY3}"/>
            <input id="DMY4" name="DMY4" type="hidden" value="${DMY4}"/>
            <input id="DMY5" name="DMY5" type="hidden" value="${DMY5}"/>
            <input id="DMY6" name="DMY6" type="hidden" value="${DMY6}"/>
            <input id="DMY7" name="DMY7" type="hidden" value="${DMY7}"/>
			
			<input id="DMY8" name="DMY8" type="hidden" value="${DMY8}"/>
            <input id="DMY9" name="DMY9" type="hidden" value="${DMY9}"/>
            <input id="DMY10" name="DMY10" type="hidden" value="${DMY10}"/>
            <input id="DMY11" name="DMY11" type="hidden" value="${DMY11}"/>
            <input id="DMY12" name="DMY12" type="hidden" value="${DMY12}"/>
            <input id="DMY13" name="DMY13" type="hidden" value="${DMY13}"/>
            <input id="DMY14" name="DMY14" type="hidden" value='${DMY14}'/>
			<input id="DMY15" name="DMY15" type="hidden" value="${DMY15}"/>
            <input id="DMY16" name="DMY16" type="hidden" value="${DMY16}"/>
            <input id="DMY17" name="DMY17" type="hidden" value="${DMY17}"/>
            <input id="DMY18" name="DMY18" type="hidden" value="${DMY18}"/>
            <input id="DMY19" name="DMY19" type="hidden" value="${DMY19}"/>
            <input id="DMY20" name="DMY20" type="hidden" value="${DMY20}"/>
            <input id="DMY21" name="DMY21" type="hidden" value="${DMY21}"/> 
        </div>
    </div>
    <!-- /.Customizer -->

		<header id="header">
			<tiles:insertAttribute name="header" />
		</header>
	
<!--  	<div class="col-md-12 ">
		 <div class=" Cdata">
			 
		<h5 style="color: #1c599d;font-weight: 400;" >Welcome: <span id="TxtCpmName"></span></h5>
			
			</div>
			</div>-->
	
		<!-- <section id="sidemenu">-->
			<tiles:insertAttribute name="menu" />
		<!--</section>-->
			
		<!-- <section id="site-content"> -->
			<tiles:insertAttribute name="body" />
		<!--</section>-->
	
	
		
		<!--<footer id="footer" class="page-footer center-on-small-only pt-0 mt-5 fixed-bottom">-->
			<tiles:insertAttribute name="footer" />
		<!--</footer>-->
</body>
</html>