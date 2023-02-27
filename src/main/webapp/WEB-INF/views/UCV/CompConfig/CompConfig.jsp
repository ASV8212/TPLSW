
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
                         Company Configuration
                        </div>
  
            <input type="hidden" id="_roles" name="_roles" value="1" class="GridMndtry gridClrfields form-control validate">

      
   <div class="row card-body pt-3">
 <div class="col-md-6 text-center">											
<div class="md-form">
<select id="id" name="id" searchable="Search here.." value="C1923434" onchange="OnChngeSetCompVal('id','name')" class="mdb-select colorful-select dropdown-primary">
<option value="" disabled selected>Company Code</option>
</select>
<label for="id">Company Code</label>
</div>  
</div>  
												
 <div class="col-md-6 text-center">											
<div class="md-form">
<select id="name" name="name" searchable="Search here.." value="Namokar Trading" disabled class="mdb-select colorful-select dropdown-primary">
<option value="" disabled selected>Company Name</option>
</select>
<label for="name">Company Name</label>
</div>    
			   
 </div>
</div>


<div class="row card-body pt-3">
 <div class="col-md-6 text-center">		

 
<div class="md-form">
<input type="text" id="description" name="description" class="form-control validate">
<label for="description" data-error="wrong" data-success="right" class="">Corporate Code</label>
 </div>    
</div>

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

    
       <script type="text/javascript" src="ThemeproLO/UCV/CompConfig/Script/CompConfig/LoadSubmit/LoadSubmit.js${DMY13}"></script>
      <script type="text/javascript" src="ThemeproLO/UCV/CompConfig/Script/CompConfig/Validation/Validation.js${DMY13}"></script>
    
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

          

