
<!--Main row-->
<!--Card-->
<div class="">
   <!--Admin panel-->
   <div class="admin-panel">

      </br>
      <!-- card -->
      <div class="card CardNS">
         <div class="card-body px-lg-5 pt-0" >
            </br>
            <form>
   
               
               <div class="form-row ">
				<div class="col-md-3">
				</div>
                <div class="col-md-9">
                   <div class="HyperControls FltRight"> 
                       <a class="Btxt4 ADDBTN FltRight NEWDRAWDOWN" onclick="InitNewUser();" href="#">Initiate Transaction</a>
     </div> 
      </div>
          </div>
               <div class="form-row">
                  <div class="col">
                     <!--<input type="button" style="display:none" class="DashTrg" onclick="FncallDocChkLst(this,'Table2',{spname:'LSW_SFETCHSANCCONFRM_DTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||0,3','SANCCONFR');" id="BTNSANCCONFR" name="BTNSANCCONFR" />-->
					 <input type="button" style="display:none" class="DashTrg" onclick="FncallMultiPagingGrd(this,'Table2',{spname:'LSW_SLISTUSRWSTL',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:$('#VERTICAL').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','DRAWDOWN');" id="BTNSANCCONFR" name="BTNSANCCONFR">
                     <table cellpadding="0" cellspacing="0" border="0" style="width: 80%" class="display" id="Table2">
                     </table>
                  </div>
               </div>
            </form>
         </div>
      </div>
      <!-- card -->
   </div>
   
    <a type="button" id="GetRemarks" class="btn btn-floating btn-large red" style="display:none" data-toggle="modal" data-target="#GetRemarksModal">
 <i class="fa fa-plus"></i></a>
                             
<div class="modal fade" id="GetRemarksModal" tabindex="-1" role="dialog" aria-labelledby="GetRemarksModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" style="max-width:800px" role="document">
    <div class="modal-content">
       <div class="modal-header">
       <div class="Btxt10 HEADTEXT">REMARKS</div> 
   
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
       <textarea id="INPRINCRDESC" name="INPRINCRDESC" class="form-control  btxt24"   style="height:200px"></textarea>
				<!-- <label class="mdb-main-label BTxt9 active ">Remarks<span class="MndtryAstr"></span></label> -->
                  </div>
           		 
           </div>
      <!-- grid  show -->

    <!--Main layout-->
        </form>
      </div>
    </div> 
      </div>
      <div class="modal-footer align-middle">

        <button type="button" id="INPRINCRDESCSUBMIT"  class="btn btn-yel Btxt2">Confirm</button>
        
      </div>
    </div>
  </div>
  </div>
  </div>
   <table style="display:none" id="GridTable2">
      <thead>
		 <th>IPRG_CODE</th>
         <th>IPRG_DELMATRIX</th>
         <th>IPRG_TYPCHNG</th>
         <th>IPRG_OVERWRITE</th>
         <th>IPRG_FLOWTO</th>
		 <th>IPRG_DOWNSTRM</th>
      </thead>
   </table>
</div>
<!--   </div>
   </div>   -->      
<script type="text/javascript" src="ThemeproLO/MigratedTL/MigratedTL/LoadSubmit.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/MigratedTL/MigratedTL/Validation.js${DMY13}"></script>                            