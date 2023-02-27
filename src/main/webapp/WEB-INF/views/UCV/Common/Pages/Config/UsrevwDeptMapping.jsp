<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>User view dept mapping</title>
 <link rel="stylesheet" href="ThemeproLO/Common/CSS/form.css${DMY13}" />
    <link href="ThemeproLO/Common/CSS/userview.css${DMY13}" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/themes/ui-lightness/jquery-ui-1.10.3.custom.css${DMY13}">

    <link href="ThemeproLO/Common/CSS/Menu/menu.css${DMY13}" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/flexigrid/css/flexigrid/flexigrid.css${DMY13}">
    <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/guiders/guiders-1.1.1.css${DMY13}" />
    <link rel="stylesheet" type="text/css" href="ThemeproLO/Common/jw/js/jquery/jquerycluetip/css/jquery.cluetip.css${DMY13}">


    <link href="ThemeproLO/Common/CSS/jquery-ui.css${DMY13}" rel="stylesheet" type="text/css" />
    <link href="ThemeproLO/Common/CSS/dataTables.jqueryui.css${DMY13}" rel="stylesheet" type="text/css" />

    <link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Maindashboard/ionicons.min.css${DMY13}">
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
    <link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">


    <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
    <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />


    <script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/queuefrwd/jquery.min.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/scripts/Alert/alertfy.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/Alert/metro/js/jquery.msgbox.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/ui_ext.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/json/util.js${DMY13}"></script>

    <script type='text/javascript' src='ThemeproLO/Common/jw/js/boxy/javascripts/jquery.boxy.js'></script>



    <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/jquery-ui.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/popup/js/script.js${DMY13}"></script>

    <script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery.dataTables.min.js${DMY13}"></script>

    <script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>


    <script src="ThemeproLO/Common/scripts/UI/jquery.dataTables.js${DMY13}" type="text/javascript"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/UI/dataTables.colVis.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/jw/js/jquery/jquery.jeditable.js${DMY13}"></script>
    <script src="ThemeproLO/Common/scripts/Commonfiles/jquery.formgrid.js${DMY13}" type="text/javascript"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/fieldformatting.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/formdatamng.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/DateControl/jquery.custom.datepicker.js${DMY13}"></script>
    <script type="text/javascript" src="ThemeproLO/Common/scripts/DateControl/jquery.placeholder.min.js${DMY13}"></script>

<script type="text/javascript" src="ThemeproLO/Common/scripts/Config/UsrevwDeptMapping/Onload.js${DMY13}"></script>

    <script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/QueueTabs.js${DMY13}"></script>
</head>
 <body bgcolor="white">

        <form id="UsrwseReviewBranch" height:640px " name="Userwise Reviewing Branch "  action=" "  method="POST ">
       <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
                <span>Userwise Reviewing Branch</span></div>
              <input id="LoggedInUser" class="DBfields" name="LoggedInUser" type="hidden" value=""/>
              <input id="ActivityID" class="DBfields"  name="ActivityID" type="hidden"  value=""/>
  				<input id="SetRightsID" name="SetRightsID" type="hidden" value="" class="inputTXTQ ISDBfields">
              <input id="BodyMainContentH" name="BodyMainContentH" type="hidden" value=""/>
              <input id="SubmitSuccess" name="SubmitSuccess" type="hidden" value=""/>            
              <input type="hidden" id="SpName" name="SpName" class="ISDBfields">
              
              <input type="hidden" id="EditPKID" class="inputTXTQ ISDBfields" name="EditPKID"  value=""/>
              
              <input type="hidden" id="hdnuserid" name="hdnuserid" value="" class="inputTXTQ  ">
              
               <table width="100%" cellpadding="10" cellspacing="0" border="0">
<tbody><tr style="width: 100%;display:none" bgcolor="#A3C3F1">
      
  </tbody></table>
        
 <div> 
     <div id="cssmenu" class="round">
     <section>
    <ul class="tabs">
    <li id="Tab1" class="NewTab"> <a id="df1" href="#tab1">Assign</a></li>
    
  </ul>
  </div> 
     
  <div class="clr"></div>
   <section class="block">
    <article name="Tab1" id="tab1">
       <br />
    <div align="center">
     <div class="form-section-title" align="left" id="HDRDETLCLEARS" style="width: 100%">
               
                </div>
    <div class="TXTFIELDSCLEAR" align="center">
      
      
      <div class="ShowNewQueue">       
      <table style="width:100%;" cellpadding="2" cellspacing="2">

       
<tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">User Id</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" disabled id="Userid" name="Userid"   type="text" value="" class="inputTXTQ inputTXT ISDBfields Newdetls DBMndtry">                    
          <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="Fncallwebservice(this,'GetJsonBRID',{spname:'SAM_sUsrWsDeptRewvpop',Param:'New',brid:'',MnuId:''},{0:$('#Userid, #hdnuserid'),1:$('#Desgn')});$('#Deptid').val('');"/>       
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>


    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">Designation</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" disabled id="Desgn" name="Desgn"   type="text" value="" class="inputTXTQ inputTXT ISDBfields DBMndtry">                  
          </td> 
       
        </tr>

    <tr class="levelhide">
   <td style="width:5%">
        </td>
   
    <td style="width:10%" class="ColumnHeading">
          <font face="Verdana" size="3">DepartmentId</font>
        </td>
        
      
         <td style="width:10%">
           <input onkeyup="this.setAttribute('value', this.value);" disabled id="Deptid" name="Deptid"  type="text" value="" class="inputTXTQ inputTXT ISDBfields Newdetls "> 
           <img src="ThemeproLO/Common/Images/search1.png" id="wfnmlkup" class="find1"   onclick="FncallwebserviceChk(this,'GetJsonBRID',{spname:'SAM_sUsrDeptId',Param:$('#hdnuserid').val(),brid:$('#Desgn').val(),MnuId:''},{0:$('#Deptid')});" />
          <span id="span_imgdateapp" style="COLOR: red">*</span>
          </td> 
       
        </tr>

           

 <tr>
          
            <td style="width:25%">
            
            </td>
           <td style="width:15%">
        </td>
            <td style="width:25%" >
            </td> 
                 
            <td style="width:50%" >
            </td>      
        
  </tr>
</table>
    
      </div>
      </div>
     </div>
    </article>
    

  </section>
</section>
    <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'SAM_SFetchUsrevwDeptMappingGridData',Param: $('#Userid').val(),brid:$('#Desgn').val(),MnuId:''},{});" id="BTN_Usermap" name="BTN_Usermap" /> 
      
 <!-- disabled  <input type="button" style="display:none" onclick="FncallPageGrid(this,'Table2',{spname:'SAM_sUsrWsDeptRewvGr',Param: '',brid:'',MnuId:''});" id="BTN_Usermap" name="BTN_Usermap" />     SAM_sUsrevDeptMap  -->
   
  <table id="Table2" name="DeptMapping|MasterGridLabel" class="display" border="0" style="width:100%"></table>       
  

</div>


<div style="display:none">
<table id="DeptMappingGrdLbl">
<tr role="row"><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="PKID: activate to sort column ascending" style="width: 280px;"><div class="DataTables_sort_wrapper">ID</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="Userid: activate to sort column ascending" style="width: 334px;"><div class="DataTables_sort_wrapper">User Id</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="Desgn: activate to sort column ascending" style="width: 323px;"><div class="DataTables_sort_wrapper">Designation</div></th><th class="sorting ui-state-default" tabindex="0" aria-controls="Table2" rowspan="1" colspan="1" aria-label="Deptid: activate to sort column ascending" style="width: 344px;"><div class="DataTables_sort_wrapper">Department Id</div></th></tr>
</table>
</div>

 <div id="popup" class="SearchList">
           <table id="Table1" class="display" border="0"></table>
        </div>  
          
    </form>
</body>
</html>