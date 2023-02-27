
    <main class="">
        <div class="container-fluid">
    

  
  <section class="section">
  
  
    <div class="row">

                    <div class="col-md-12">
                        <!--Card-->
                        <div class="card card-cascade narrower">

                            <!--Admin panel-->
                            <div class="admin-panel">

                                <!--Main First row-->
                                <div class="row m-b-0">

                                    <!--First column-->
                                    <div class="col-md-12">

									
									 <!--Panel title-->
                                        <div class="card-header white-text">
                         User Creation
                        </div>
  
            <input type="hidden" id="_roles" name="_roles" value="1" class="GridMndtry gridClrfields form-control validate">

      
   <div class="row card-body pt-3">
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="text" id="username" name="username" disabled class="GridMndtry gridClrfields form-control validate">
<label for="username" data-error="wrong" data-success="right" class="">Username</label>
 </div>    
</div>
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="text" id="firstName" name="firstName" class="GridMndtry gridClrfields form-control validate">
<label for="firstName" data-error="wrong" data-success="right" class="">First Name</label>
 </div>    
 </div>
</div>

<div class="row card-body pt-3">
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="text" id="lastName" name="lastName" class="GridMndtry gridClrfields form-control validate">
<label for="lastName" data-error="wrong" data-success="right" class="">Last Name</label>
 </div>    
</div>
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="text" id="email" name="email" class="GridMndtry gridClrfields form-control validate">
<label for="email" data-error="wrong" data-success="right" class="">Email</label>
 </div>    
</div>
</div>

<div class="row card-body pt-3">
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="password" id="password" name="password" class="GridMndtry gridClrfields form-control validate">
<label for="password" data-error="wrong" data-success="right" class="">Password</label>
 </div>    
</div>
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="password" id="confirmPassword" name="confirmPassword" class="GridMndtry gridClrfields form-control validate">
<label for="confirmPassword" data-error="wrong" data-success="right" class="">Confirm Password</label>
 </div>    
</div>
</div>


	<div class="row card-body pt-3">									


  <div class="col-md-6 text-center">											
<div class="md-form">
<input type="text" id="employeeCode" name="employeeCode" class="GridMndtry gridClrfields form-control validate">
<label for="employeeCode" data-error="wrong" data-success="right" class="">Mobile No</label>
 </div>    
</div>
   </div>
   
   

	<div class="row card-body pt-3">	
 

 <div  style="display:none" class="col-md-6 text-center">											
<div class="md-form">
<input type="text" id="employeeRole" name="employeeRole" class="GridMndtry gridClrfields form-control validate">
<label for="employeeRole" data-error="wrong" data-success="right" class="">Job Title</label>
 </div>    
</div>
</div>

	<div class="row card-body pt-3">	
  <div class="col-md-6">                                             
 <div class="md-form">
 <!--<input type="text" id="POIG_CorpCode" name="POIG_CorpCode" class="GridMndtry gridClrfields form-control validate">-->
<select  id="employeeOrganization" name="employeeOrganization" disabled class="mdb-select md-form gridClrfields " >
<option value="" disabled selected>Organization</option>
<option value="Adani">Adani</option>
</select>
<label for="employeeOrganization" data-error="wrong" data-success="right" class="">Organization</label>
</div>                                               
 </div>

 
   <div class="col-md-6">                                             
 <div class="md-form">
 <!--<input type="text" id="POIG_CorpCode" name="POIG_CorpCode" class="GridMndtry gridClrfields form-control validate">-->
<select  id="employeeDepartment" name="employeeDepartment" disabled class="mdb-select md-form gridClrfields " >
 <option value=""> </option>
 <!--<option value="C19000035"> EG Electricals</option>
 <option value="C18000021"> Mahavir Sys Power Private Ltd</option>
 <option value="C19000034"> Rani sati agro oils pvt ltd</option>
 <option value="C19000067"> RM Electronics</option>
 <option value="C19000065"> TATA MOTORS</option>
 <option value="C18000025"> Vijay Sales</option>-->
</select>
<label for="employeeDepartment" data-error="wrong" data-success="right" class="">Department</label>
</div>                                               
 </div>
 </div>

				
				
<div style="display:none" class="form-row">
                    <label for="field1">Head of Department (HOD)?</label>
                    <span class="form-input">
                        <select id="employeeDepartmentHod" name="employeeDepartmentHod">
                            <option value="no" selected>No</option>
                            <option value="yes" >Yes</option>
                        </select>
                    </span>
</div>
   
   
   
   <legend>Please authenticate to update profile</legend>

<div class="row card-body pt-3">
 <div class="col-md-6 text-center">											
<div class="md-form">
<input type="password" id="oldPassword" name="oldPassword" class="GridMndtry gridClrfields form-control validate">
<label for="oldPassword" data-error="wrong" data-success="right" class="">Current Password</label>
 </div>    
</div>
</div>






<div style="display:none" class="form-row">
                    <label for="field1">Grade</label>
                    <span class="form-input">
                        <select id="employeeGrade" name="employeeGrade">
                            <option value=""></option>
                        </select>
                    </span>
</div>

      
              
            <div class="form-buttons">
                <input style="display:none" class="form-button" type="button" value="Save"  onclick="validateField()"/>
                <input style="display:none" class="form-button" type="button" value="Cancel" onclick="closeDialog()"/>
            </div>
     
    </div>
	
	</div>
	</div>
	
	</div>
	</div>
	</section>
	 </div>
    </main>
	 <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
        <a class="btn-floating btn-large red">
            <i class="fa fa-pencil"></i>
        </a>

        <ul>
           <li class="assignmentComplete"><a data-toggle="tooltip" onclick="validateField()" data-placement="left" title="" data-original-title="Submit"  style="width: 120px;height: 30px;border-radius: 0%;" class="btn-floating btn btn-primary btn-sm">Submit</a></li>
        </ul>
    </div>

	
	<script type="text/javascript" src="/jw/js/jquery/jquery-1.9.1.min.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/jquery-migrate-1.2.1.min.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/ui/jquery-ui-1.10.3.min.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/flexigrid/flexigrid.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/json/ui.js?build=2240"></script>
    <script type="text/javascript" src="/jw/js/json/ui_ext.js?build=2240"></script>
    <script type="text/javascript" src="/jw/js/json/util.js?build=2240"></script>
    <script type="text/javascript" src="/jw/js/jquery/md5/jquery.md5.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/jquery.cookie.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/guiders/guiders-1.1.1.js${DMY13}"></script>

    <!-- jquery clue tip -->

    <script type="text/javascript" src="/jw/js/jquery/jquerycluetip/jquery.hoverIntent.js${DMY13}"></script>
    <script type="text/javascript" src="/jw/js/jquery/jquerycluetip/jquery.cluetip.js${DMY13}"></script>

    
    
    
    <script type="text/javascript">
        $(document).ready(function(){
            $('body').append('<img id="image_alive" width="1" height="1" src="/jw/images/v3/clear.gif?" alt="">');
            window.setInterval("keepMeAlive('image_alive')", 200000);
        });
        function keepMeAlive(imgName)
        {  
             myImg = document.getElementById(imgName);   
             if (myImg)
                 myImg.src = myImg.src.replace(/\?.*$/, '?' + Math.random());   
        }   
    </script>
    
    
    <!-- disabled using backspace key to navigate back in IE-->
    <script type="text/javascript">
        if ($.browser.msie) {
            $(document).on("keydown", function (e) {
                if (e.which === 8 && !$(e.target).is("input:not([readonly]), textarea:not([readonly])")) {
                    e.preventDefault();
                }
            });
        }
    </script>   


        

	<!--<link rel="stylesheet" type="text/css" href="/ThemePro_LSW/ThemeproLO/Common/CSS/form.css${DMY13}">-->
    <style>
        
    </style>

           <script>
            $(function() {
                if (window.self !== window.top) {
                    var wh = $(window.self).height() - 50;
                    $("body.popupBody").css("width", "99.9%");
                    $("#main-body-content").css("height", wh + "px");
                }
            });
            UI.base = "/jw";
            
        </script>

    <script type="text/javascript">
        $(document).ready(function(){
           
            showHideHod();
			
			ProfDataLoad($("#LogUsr").val())

            $('#employeeOrganization').change(function(){
                loadDepartmentAndGradeOption();
            });
            
            $('#employeeDepartment').change(function(){
                showHideHod();
            });
        });

        function validateField(){
            var valid = true;
            var alertString = "";
            var idMatch = /^[\.@0-9a-zA-Z_-]+$/.test($("#username").attr("value"));
            if(!idMatch){
                if(!idMatch){
                    alertString += 'Only letters (a-z and A-Z), numbers (0-9), dot(.), at sign (@), dash (-) and underscore (_) are allowed in the Username field';
                    $("#username").focus();
                    valid = false;
                }
            }
			
			if($( '#oldPassword' ).val()=="")
			{
				alert("Enter the current password to update profile!!")	
			}
			
			//var op= UI_getdata($( '#username' ).val(),"CHK","","","","SAM_SFEPADMNGRPINS")
			


            if(valid){
               
			 var data;

			data = new FormData();
			data.append( 'username', $( '#username' ).val() );
			data.append( 'firstName', $( '#firstName' ).val() );
			data.append( 'lastName', $( '#lastName' ).val() );
			data.append( 'email', $( '#email' ).val() );
			data.append( 'password', $( '#password' ).val() );
			data.append( 'confirmPassword', $( '#confirmPassword' ).val() );
			data.append( 'roles', $( '#roles' ).val() );
			data.append( 'timeZone', "" );
			data.append( 'oldPassword', $( '#oldPassword' ).val() );
				
			

			$.ajax({
				url: window.location.origin+'/jw/web/console/profile/submit',
				type: 'POST',
				data: data,
				enctype: 'multipart/form-data', 
				contentType: false,
				processData: false,
				success: function ( data ) {
				alert("User Updated");
				
				UI_getdata($('#username').val(),$("#employeeCode").val(),$('#password').val(),"","","SAM_SFEPPRFLEUPD")
				
				}
				});
            }else{
                alert(alertString);
            }
			location.reload();
        }

        function loadDepartmentAndGradeOption(){
            if($('#employeeOrganization').val() != ""){

                      
					  var op= UI_getdata($('#CpmCd').val(),"","","","","SAM_SFEPDEPTVAL")
					  
					  var Deptid=$(op).find('id').text();
					  var departments=$(op).find('name').text();
					  
					  
                        $('#employeeDepartment option').remove();
                        $('#employeeGrade option').remove();

                        if($(op).find('id') !=null && $(op).find('id').length > 0){
                            for(i=0; i<$(op).find('id').length; i++){
                                $('#employeeDepartment').append('<option value="' + $($(op).find('id')[i]).text() + '">'+ $($(op).find('name')[i]).text() + '</option>');
                         // $('#employeeDepartment').prev('ul').find('li').empty()
						//  $('#employeeDepartment').prev('ul').append('<li class=""><span class="filtrable">' + departments[i].prefix + '' + UI.escapeHTML(departments[i].name) + '</span></li>');
							}
							
							 $('#employeeDepartment').material_select();
							
                        }
 showHideHod();
                      

                        if($('#employeeOrganization').val() == ""){
                            $('#employeeDepartment option[value=]').attr("selected", "selected");
                            $('#employeeGrade option[value=]').attr("selected", "selected");
                        }

                    

		   }
			else{
                $('#employeeDepartment option').remove();
                $('#employeeGrade option').remove();
                showHideHod();
            }
        }
        
        function showHideHod(){
            if($('#employeeDepartment').val() != "" && $('#employeeDepartment').val() != undefined){
                $('#employeeDepartmentHod').parent().parent().hide();
                $('#employeeDepartmentHod').removeAttr("disabled");
            }else{
                $('#employeeDepartmentHod').parent().parent().hide();
                $('#employeeDepartmentHod').attr("disabled", "disabled");
            }
        }

        function closeDialog() {
            if (parent && parent.PopupDialog.closeDialog) {
                parent.PopupDialog.closeDialog();
            }
            return false;
        }
		
		function ProfDataLoad(Usrid)
		{
		  var Val= UI_getdata(Usrid,"","","","","SAM_SFEPPrfleDataLoad")	
			
			$( '#username' ).val($(Val).find("username").text()) 
			$( '#firstName' ).val($(Val).find("firstName").text()) 
			$( '#lastName' ).val($(Val).find("lastName").text()) 
			$( '#email' ).val($(Val).find("email").text()) 
			$( '#roles' ).val($(Val).find("roleId").text())
			$( '#active' ).val($(Val).find("active").text()) 
			$( '#employeeCode' ).val($(Val).find("employeecode").text()) 
			$( '#employeeRole' ).val($(Val).find("role").text())
			$( '#employeeOrganization' ).val($(Val).find("organizationid").text()) 
			 $('#employeeDepartment').append('<option value="' + $(Val).find("departmentid").text() + '">'+ $(Val).find("name").text() + '</option>');
			 $("#employeeDepartment").closest('div').find('li:contains("'+$(Val).find("name").text()+'")').addClass('active')
			 $("#employeeDepartment").val($(Val).find("departmentid").text());
			// $("#employeeDepartment").material_select();
			 $("#employeeDepartment").closest('div').prev().remove()
			 $("#employeeDepartment").closest('div').prev().remove()
		  
			//$( '#employeeDepartment' ).val($(Val).find("departmentid").text()) 
			$( '#employeeStartDate' ).val($(Val).find("startdate").text()) 
			$( '#employeeEndDate' ).val($(Val).find("enddate").text()) 
			
			
		//	$('#employeeDepartment').material_select();
			// $('#roles').material_select();
		}
		
		

        //Calendar.show("employeeStartDate");
      //  Calendar.show("employeeEndDate");
    </script>

