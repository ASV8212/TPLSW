<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ page import = "ckeditor.EditData" %>
<%@page language="java" import="java.util.*" %>

<jsp:useBean id="editData" class="ckeditor.EditData" scope="session"/>
<jsp:setProperty name="editData" property="*"/>

<jsp:useBean id="engine" class="ckeditor.EditEngine" scope="session"/>
<jsp:setProperty name="engine" property="*"/>

  <head>
    
   <!-- <meta http-equiv="X-UA-Compatible" content="IE=10">-->
    <title></title>
    <!-- Tell the browser to be responsive to screen width -->
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<!--<script type="text/javascript" language="javascript" src="ThemeproLO/Common/scripts/UI/jquery-1.11.1.min.js${DMY13}"></script>-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css${DMY13}">
<!--<link href="ThemeproLO/Common/MDB/css/bootstrap.min.css${DMY13}" rel="stylesheet">
<link href="ThemeproLO/Common/MDB/css/mdb.min.css${DMY13}" rel="stylesheet">
<link href="ThemeproLO/Common/MDB/css/style.css${DMY13}" rel="stylesheet">
 <link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />  
 <link href="ThemeproLO/Common/CSS/PageComments/styles.css${DMY13}" rel="stylesheet" />
 -->
 
 <!--Alert-->
 <link href="ThemeproLO/Common/Alert/sweetalert.css${DMY13}" rel="stylesheet" />
<!--<link rel="stylesheet" href="ThemeproLO/Common/scripts/UI/queuefrwd/ionicons.min.css${DMY13}">-->

<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.bootstrap.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.core.css${DMY13}">
<link rel="stylesheet" href="ThemeproLO/Common/CSS/Alert/alertify.default.css${DMY13}">

  <link href="ThemeproLO/Common/jw/js/boxy/stylesheets/boxy.css${DMY13}" rel="stylesheet" type="text/css" />
 <link href="ThemeproLO/Common/Alert/metro/css/jquery.msgbox.css${DMY13}" rel="stylesheet" type="text/css" />
 
<script type="text/javascript" src="ThemeproLO/Common/Alert/sweetalert.min.js${DMY13}"></script>
	
 <!--Alert-->


 <!--Text Editor-->
 
 <script src="ThemeproLO/ckeditor/ckeditor.js${DMY13}"></script>
<script src="ThemeproLO/ckeditor/BrowserIdentity.js${DMY13}"></script>
<script src="ThemeproLO/ckeditor/samples/js/sample.js${DMY13}"></script>

<!--FEB-->


	<link href="ThemeproLO/Common/FEP/css/bootstrap.min.css${DMY13}" rel="stylesheet"> 
	
	<!-- Material Design Bootstrap --> 
	<link href="ThemeproLO/Common/FEP/css/mdb.min.css${DMY13}" rel="stylesheet"> 
	
	<!-- Customizer --> 
	<link rel="stylesheet" href="ThemeproLO/Common/FEP/css/customizer.min.css${DMY13}"> 
	
	
	<!-- Your custom styles (optional) --> 
	<link href="ThemeproLO/Common/FEP/css/style.css${DMY13}" rel="stylesheet"> 
	
	<!-- <link href="ThemeproLO/Common/FEP/css/Grid/datatables.min.css${DMY13}" rel="stylesheet"> 
	<link href="ThemeproLO/Common/FEP/css/Grid/datatables-select.min.css${DMY13}" rel="stylesheet"> --> 
	
	<!-- SCRIPTS --> 
	
	<!-- JQuery
	<script type="text/javascript" src="ThemeproLO/Common/FEP/js/jquery-3.1.1.min.js${DMY13}"></script> 

<link href="ThemeproLO/Common/CSS/jquery-ui.css${DMY13}" rel="stylesheet" type="text/css"/>

 --> 


  </head>
  <body>
  
			
		

    <form class="needs-validation" novalidate>
			<input id="processId"  name="processId" type="hidden" value=""/>
			   <script type="text/javascript">
 var Prcsid=getUrlParam("PrcsID");
 document.getElementById("processId").value=Prcsid;
  </script>
<% editData.ClearMtd(); %>
<% String Prcsid=request.getParameter("PrcsID");
String TblName="LSW_tTEAPPROVALDETL";
String Spname="Sam_sFetRichTxtEdt";
String AcvtID="";
String HistVar="";
editData.setTblName(TblName);
editData.setPrcsid(Prcsid); 
editData.setSpname(Spname);
editData.setAcvtID(AcvtID);
editData.setHistVar(HistVar); %>
<% editData.EditData1(); %>
</br>

</br>
<!--Main row-->
<!--  <div class="row FormRows"> 
   <div class="col-md-12"> -->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">
      </br>
      <!-- card -->
      
        <div class="form-row">
             <div class="col-md-8">
      <div class="card CardNS">
         </br>
         <!-- Card header -->
         
         <div class="form-row card-body px-lg-5 pt-0">
            <div class="col Btxt3">Approval Activity
            <div class="HyperControls form-row FltRight"  style="display:none;"> 
			      <a onclick="" class="Btxt4 FltRight"  href="#">Raise a Query</a>
			      </div>
            </div>
         </div>
         </br>
         <!-- Card body -->
         <div data-for="BankDetail1" class="BankDetail1"> 
         </div>
         <div class="DynamicPageGrid" data-val="PROPTXTHDR|Account" id="BankDetail1" style="display:none">
            <div class="card-body px-lg-5 pt-0 DYNROW BSbrdlight" >
               </br>
               
                <form>
               <div class="form-row">
			   <input type="text" id="HIDNLVL" hidden="hidden" name="HIDNLVL" class="form-control ">
                 <!--  <div class="col Btxt1">
                  <div class="md-form">
                  <span>BY [</span>
                  <input type="text" id="USR_ID" name="USR_ID" class="DSVLBL form-control IsAlphaFields APSGDBfields">
                  <span>]</span>
                  <input type="text" id="ACTION_TAKEN" name="ACTION_TAKEN" class="DSVLBL form-control IsAlphaFields APSGDBfields">
                  <span>on</span>
                  <input type="text" id="ACTION_DATE" name="ACTION_DATE" class="DSVLBL form-control IsAlphaFields APSGDBfields">
                  <input type="text" id="ACTION_TYM" name="ACTION_TYM" class="DSVLBL Btxt6  form-control IsAlphaFields APSGDBfields">
                  <input type="text" id="REMRK" name="REMRK" class="DSVLBL form-control IsAlphaFields APSGDBfields">
                  </div>
                  </div> -->
                  
                  
                  
                  <div class="col-md-12 ">
                  <div class="md-form">
                  
                   <span class="Btxt10">BY</span>
                  <span id="USR_ID" name="USR_ID" class="DataFld   APSGDBfields"></span>
                  <span id="ACTION_TAKEN" name="ACTION_TAKEN" class="DataFld Btxt10 APSGDBfields"></span>
                  <span id="NXT_LVL" name="NXT_LVL" class="DataFld APSGDBfields"></span>
                   <span>on</span>                  
                  <span id="ACTION_DATE" name="ACTION_DATE" class="DataFld APSGDBfields"></span>
                  <span id="ACTION_TYM" name="ACTION_TYM" class="DataFld  APSGDBfields FltRight Ntxt2"></span>
                                
                                
                                    
                                  
             <!--   <span> <input type="text" id="USR_ID" name="USR_ID" class="DSVLBL  IsAlphaFields APSGDBfields"></span>
                 <span> <input type="text" id="ACTION_TAKEN" name="ACTION_TAKEN" class="DSVLBL  IsAlphaFields APSGDBfields"></span>
                   <span>on</span>
                  <input type="text" id="ACTION_DATE" name="ACTION_DATE" class="DSVLBL  IsAlphaFields APSGDBfields">
                   <input type="text" id="ACTION_TYM" name="ACTION_TYM" class="DSVLBL Btxt6 FltRight  IsAlphaFields APSGDBfields">
                  </div>-->     
                  </div>           
              
              
                  </div>
                   </div>
                   <div class="form-row">
                  <div class="col-md-12 ">
                  <div class="md-form ">
                      <span type="text" class=" DSVLBL Datahtml form-control IsAlphaFields APSGDBfields" style="border: none;" id="REMRK" name="REMRK"></span>
                  </div>
                  </div>
               </div>
               </form>
            </div>
         </div>
		 
		 </br>
		 <div class="form-row">
		     <div class="HyperControls form-row FltRight SanLink" style="display:none"> 
			      <a onclick="GentrateSancLetter()" class="Btxt4 FltRight"  href="#">Sanction Letter.pdf</a>
			  </div>
		    <div class="col d-flex justify-content-center">
			  <button type="button" style="dispplay:none" onclick="GentrateSancLetter()" id="GenSan" class="btn btn-Syel  waves-effect waves-light">Generate Sanction Letter</button>
			  <!--CO SIGN STRT-->
			  <!--<button type="button" data-aria="LSW_TCHRGHDR|APCH" data-card="0" style="display:none;" id="ApproveRecmnd" onclick="PopFldToDrpDwn(this)" class="btn btn-Syel waves-effect waves-light DECDBTN WFRECMFLOW BTNHIDE">Approve and Recommend</button>-->
			  <!--CO SIGN END-->
			   </div>
		</div>
         <div class="form-row">
            <div class="col d-flex justify-content-center">
            
             <button type="button" id="REEVAL" data-aria="" style="display:none;" class="btn btn-Syeloutline waves-effect waves-light BTNHIDE ">Re-Evaluate</button>
               <button type="button" id="Save" style="display:none;" data-aria="LSW_TENACHDTL|AEND"  class="btn btn-Syeloutline waves-effect waves-light FormSave BTNHIDE">Save</button>
               <button type="button" id="Reject" data-aria="LSW_TENACHDTL|AEND" id="Reject" class="btn btn-Syeloutline waves-effect waves-light FormSave WFRECMFLOW BTNHIDE ">Reject</button>
			    <button type="button" id="QUERYRAISED" style="width:200px" data-aria="LSW_TENACHDTL|AEND" onclick="PopFldToDrpDwn(this)"  class="btn btn-Syeloutline waves-effect waves-light WFRECMFLOW FormSave">Approval Query</button>
               <button type="button" id="Forward" data-aria="LSW_TENACHDTL|AEND" id="Forward" onclick="PopFldToDrpDwn(this)"  class="btn btn-Syeloutline waves-effect waves-light WFRECMFLOW FormSave">Forward</button>   
               <button type="button" data-aria="LSW_TENACHDTL|AEND" data-card="2" id="Recommended" onclick="PopFldToDrpDwn(this)" class="btn btn-Syel waves-effect waves-light DECDBTN WFRECMFLOW BTNHIDE">Recommend</button> 
               <button type="button" data-aria="LSW_TCHRGHDR|APCH" data-card="0" style="display:none;" id="Approve" class="btn btn-Syel waves-effect waves-light DECDBTN WFRECMFLOW BTNHIDE">Approve</button>
               <button type="button" data-aria="LSW_TCHRGHDR|APCH" data-card="0"  id="SB" onclick="PopFldToDrpDwn(this)" class="btn btn-Syel waves-effect waves-light DECDBTN WFRECMFLOW  BTNHIDE">Send Back</button>
            </div>
         </div>
      </div>
      <!-- card -->
   </div>


   <div class="col-md-4">

 <div class="card CardNS">
         </br>
         <!-- Card header -->
         
       
         
          <div class="form-row">
           <div class="col-md-12 ">
            
            <div class="form-row">
               <div class="col Btxt3">View Reports</div>
            </div>
       
         <!-- Card body -->
         <div data-for="ViewReport" class="ViewReport"> 
         </div>
         <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ViewReport" style="display:none">
         <div data-row="" class=" DYNROW">
         <input type="text" id="ARVR_PRCSID" hidden="hidden" name="ARVR_PRCSID" class="form-control ARVRDBfields">
         <input type="text" id="ARVR_ACTIVITYID" hidden="hidden" name="ARVR_ACTIVITYID" class="form-control ARVRDBfields">
         <input type="text" id="ARVR_DTCREATED" hidden="hidden" name="ARVR_DTCREATED" class="form-control ARVRDBfields">
         <input type="text" id="ARVR_CREATEDBY" hidden="hidden" name="ARVR_CREATEDBY" class="form-control ARVRDBfields">
         <input type="text" id="ARVR_DTMODIFIED" hidden="hidden" name="ARVR_DTMODIFIED" class="form-control ARVRDBfields">
         <input type="text" id="ARVR_MODIFIEDBY" hidden="hidden" name="ARVR_MODIFIEDBY" class="form-control ARVRDBfields">
         <input type="text" id="ARVR_CATEGORY"  hidden="hidden" name="ARVR_CATEGORY" class="form-control ARVRDBfields">
            <div class="form-row">
              <div class=" col-md-6">
                <div class="md-form">
                   
                  <span type="text" class="DataFld  ARVRDBfields" id="ARVR_FILEPDF" name="ARVR_FILEPDF"></span>
				 </div>
              </div>
              <div class=" col-md-4">
                 <div class="md-form">
                   <span type="text" class="DataFld ARVRDBfields" id="ARVR_VALUE" name="ARVR_VALUE"></span>
                 </div>
              </div>
			  <div class=" col-md-2">
                 <div class="md-form">
                     <input type="text" id="ARVR_VIEWPDF" hidden="hidden" name="ARVR_VIEWPDF" class="form-control DSVLBL  ARVRDBfields  ">
                     <div class="ARVR_VIEWPDF"><img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" onclick="GrdDocDwnld(this,$(this).closest('.DYNROW').attr('data-row'))" data-view="ARVR_VIEWPDF|ARVR_FILEPDF" class="rounded" alt="Cinque Terre" width="35" height="25"> </div>
                 </div>
              </div>
            </div>
          </div>
         </div>
          <div class="md-form">
              <div class="HyperControls"> 
                  <a type="button" class="Btxt4" data-toggle="modal" name="DocCheck" data-target="#DocCheck" href="#">View Document Checklist</a>
              </div>
          </div>
            </br>
            <div class="form-row">
               <div class="col Btxt3">Empowerment Type</div>
            </div>
         <!-- Card body -->
         <div data-for="Empowerment" class="Empowerment"> 
         </div>
         
         <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="Empowerment" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="ARET_PRCSID" hidden="hidden" name="ARET_PRCSID" class="form-control ARETDBfields">
         <input type="text" id="ARET_ACTIVITYID" hidden="hidden" name="ARET_ACTIVITYID" class="form-control ARETDBfields">
         <input type="text" id="ARET_DTCREATED" hidden="hidden" name="ARET_DTCREATED" class="form-control ARETDBfields">
         <input type="text" id="ARET_CREATEDBY" hidden="hidden" name="ARET_CREATEDBY" class="form-control ARETDBfields">
         <input type="text" id="ARET_DTMODIFIED" hidden="hidden" name="ARET_DTMODIFIED" class="form-control ARETDBfields">
         <input type="text" id="ARET_MODIFIEDBY" hidden="hidden" name="ARET_MODIFIEDBY" class="form-control ARETDBfields">
         <input type="text" id="ARET_CATEGORY"  hidden="hidden" name="ARET_CATEGORY" class="form-control ARETDBfields">
            <div class="form-row">
              <div class=" col-md-12">
                <div class="md-form">
				<span type="text" class="DataFld ARETDBfields" id="ARET_EMPOWER" name="ARET_EMPOWER"></span>
                 </div>
              </div>
            </div>
          </div>
         </div> 
		 
		  </br>
            <div class="form-row">
               <div class="col Btxt3">Manual Empowerment</div>
            </div>
         <!-- Card body -->
         <div data-for="ManualEmpowerment" class="ManualEmpowerment"> 
         </div>
         
         <div class="DynamicPageGrid" data-val="PROPTXTHDR|" id="ManualEmpowerment" style="display:none">
       <div data-row="" class=" DYNROW">
          <input type="text" id="MAET_PRCSID" hidden="hidden" name="MAET_PRCSID" class="form-control MAETDBfields">
         <input type="text" id="MAET_ACTIVITYID" hidden="hidden" name="MAET_ACTIVITYID" class="form-control MAETDBfields">
         <input type="text" id="MAET_DTCREATED" hidden="hidden" name="MAET_DTCREATED" class="form-control MAETDBfields">
         <input type="text" id="MAET_CREATEDBY" hidden="hidden" name="MAET_CREATEDBY" class="form-control MAETDBfields">
         <input type="text" id="MAET_DTMODIFIED" hidden="hidden" name="MAET_DTMODIFIED" class="form-control MAETDBfields">
         <input type="text" id="MAET_MODIFIEDBY" hidden="hidden" name="MAET_MODIFIEDBY" class="form-control MAETDBfields">
         <input type="text" id="MAET_CATEGORY"  hidden="hidden" name="MAET_CATEGORY" class="form-control MAETDBfields">
            <div class="form-row">
              <div class=" col-md-12">
                <div class="md-form">
				<span type="text" class="DataFld MAETDBfields" id="MAET_EMPOWER" name="MAET_EMPOWER"></span>
                 </div>
              </div>
            </div>
          </div>
         </div>
   </div>
 </div>
         
         
        

</div>
</div>
</div>
      <!-- card -->
   </div>
</div>


    <input type="text" id="CUSRID" hidden="hidden" name="CUSRID" class="DSVLBL form-control ">
    <input type="text" id="ACTIONTAKEN" hidden="hidden" name="ACTIONTAKEN" class="DSVLBL form-control ">
    <input type="text" id="TOUSRID" hidden="hidden" name="USRID" class="DSVLBL form-control "> 
    <input type="text" id="RCOMREMARKS" hidden="hidden" name="RCOMREMARKS" class="DSVLBL form-control ">  
	 <input type="text" id="FRWDDRPDWN" hidden="hidden" name="FRWDDRPDWN" class="DSVLBL form-control ">  
	  <input type="text" id="RECMDDRPDWN" hidden="hidden" name="RECMDDRPDWN" class="DSVLBL form-control ">
	<input type="text" id="APPRVRECMDDRPDWN" hidden="hidden" name="APPRVRECMDDRPDWN" class="DSVLBL form-control ">	  

<a type="button" id="MobIPopup" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#MobIModal">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="MobIModal" tabindex="-1" role="dialog" aria-labelledby="MobIModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10">APPROVALS</div> 
   
   <a href="#"><img id="MOBIPOPCLOSE" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
      </div>  
      <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
        	</br>
        	</br>
           <div class="form-row">
           		 <div class="col">
           	     <div class="md-form">
                    <select class="mdb-select md-form colorful-select dropdown-primary" id="RECMTO" name="RECMTO">
				   <option value="" disabled>Select</option>
                  
				</select>
				<label class="mdb-main-label BTxt9">SEND TO<span class="MndtryAstr"></span></label>
                  </div>
           		 </div>
           		  </div>
           		    <div class="form-row">
           		 	 <div class="col">
           	     <div class="md-form" style="display:none">
       <textarea id="RDESC" name="RDESC" class="form-control NoSpecialChar AAPRDBfields btxt24"   style="height:200px"></textarea>
				<!-- <label class="mdb-main-label BTxt9 active ">Remarks<span class="MndtryAstr"></span></label> -->
                  </div>
				  
				    <div class="adjoined-bottom">
		      <div class="grid-container">
			  <div class="grid-width-100">
		
				<textarea style="" id="AAPR_TEXTEDITOR"	placeholder="Type the content here!"  class="Edtr Text" name="AAPR_TEXTEDITOR" data-maxlen="10000" maxlength="10000">
				 <%= editData.getTxt9() %>  
				
				 </textarea>

				<div class="invalid-tooltip"></div>
			</div>
			
		</div>
	</div> 
			
				  
				  
           		 </div>
           		 
           		 
           </div>
      <!-- grid  show -->

    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">

        <button type="button" id="WFCONF"  class="btn btn-yel Btxt2">Confirm</button>
        
      </div>
    </div>
  </div>
  </div>

<div class="modal fade" id="DocCheck" tabindex="-1" role="dialog" aria-labelledby="DocCheckLabel"
  aria-hidden="true">
    <div class="modal-dialog" style="max-width:1250px" role="document">
       <div class="modal-content">
           <div class="modal-header">
              <div class="Btxt3">Document Checklist</div> 
              <a href="#"><img id="DocCheckClose" class="close" data-dismiss="modal" aria-label="Close" src="ThemeproLO/Common/FEP/images/Close1.png" alt="DashSearch"></img></a>      
           </div>  
          <div class="modal-body">
         <div class="">
    <!-- Card body -->
     <div class="">
         <form >
			</br>
		  <div class="form-row card-body px-lg-5 pt-0">
              <div class="col">
                  <input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'KYCLIST',{spname:'LSW_SGETDOCCHKLST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','APPRKYCLIST');" id="BTNKYCLIST" name="BTNKYCLIST" />
                  <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="KYCLIST">
                  </table>
              </div>
         </div>
      <!-- grid  show -->
    <!--Main layout-->
               <div class="modal-footer align-middle">
                <button type="button" id="DocCheckConfirm"  class="btn btn-yel Btxt2">Close</button> 
              </div>
           </form>
        </div>
      </div>
    </div> 
      </div>
    </div>
  </div>
 <script>
initSample("AAPR_TEXTEDITOR");
</script>	
<% editData.ClearMtd(); %>  
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/Approve/Script/Appr/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Approve/Script/Appr/Validation.js${DMY13}"></script>