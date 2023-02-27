
$('.CollectedPage').on('click', function() {
   //location.reload();
   $(".FormPageMultiTab").find("li.active").click();

 //window.location.reload()
});


 function LoadCheckOnIntegration(html){
	if($(html).find("[name=BKDT_PROCESSMODE]").val() == "Manual Statement"){
		$($(html).find(".Auto").find(".col-md-4")[0]).hide();
		$($(html).find(".Auto").find(".col-md-4")[1]).hide();
		
		if($(html).find("[name=BKDT_BSAMSINITRESP]").val() != "")
		{
			$($(html).find(".Auto").find(".col-md-4")[2]).hide();
		}
		
		if($(html).find("[name=BKDT_TRANSCOMP]").val() != "")
		{
			$(html).find("#CompleteTrans").hide();
		}
	}
} 


 function LoadInstOptn(html)
{
	var exid = $(html).find("[name=BKDT_INSID]").val();
	var op= UI_getdata("","","","","","LSW_SGETINISTITUTIONLIST")
	
	$(html).find("[name=BKDT_INSID]").material_select("destroy");
	$(html).find("[name=BKDT_INSID]").html("");
	$(html).find("[name=BKDT_INSID]").append($(op).find("RESULT").html());
	if(exid != "")
	{
		$(html).find("[name=BKDT_INSID]").val(exid);
	}
	$(html).find("[name=BKDT_INSID]").material_select();
} 



function handleonadd(HTML){
	if($(HTML).find("select[name=BKDT_MODE]").val()=="Manual")
	{
			$(HTML).find(".MODEMANUAL").show()			
	}
	else
	{
			$(HTML).find(".MODEMANUAL").hide()
	}
	
	if($(HTML).find("input[name=BKDT_INITIATEBSA]").val()=="Initiated")
	{
			$(HTML).find(".Auto").show()
			$(HTML).find(".Rpt").show()
			$(HTML).find("#InitiateBSA").hide();
			
	}
	else
	{
			$(HTML).find(".Auto").hide()
			$(HTML).find(".Rpt").hide()
			$(HTML).find("#InitiateBSA").show();
	}
	//ODCC(HTML,acctype);
	LoadCheckOnIntegration(HTML);
	LoadInstOptn(HTML);
}

function AddPageMultiData_Onscreen (UniqFldID,PrcsVal,UniqNo,DV,FieldClass)
{
      var html = $($("#"+DV).html());
      var document = $(html);
      
      //$(html).find("[name="+PRCSID+"]").val(PrcsVal);
      
      var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
      var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
      var row = $("."+ DV).find('.DYNROW').length;
      var j = parseInt(row) + 1;
      
      if(UniqNo != "")
    	  {
    	  $(html).find("#"+UniqFldID).val(UniqNo + j);
    	  }

      if ($(html).find('.FormaccordionSUB').length > 0)
	   {
	   
    	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
    	  
	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
	   
	  // $(html).find('.Formaccordion').attr("id",AccordionID);
	   
	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
	   
	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
	   
	   $(html).find(".NXTBTNF").attr("data-card",j-1);
	   
	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
	   
	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
	   
	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
	   
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
	   
	   }
      
      
      
      $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
      $(html).find("[data-row]").attr("data-row",j);
      $(html).attr("data-row",j);
      var n = $(html).find("." + FieldClass).length;
        for (i = 0; i < n; i++) {
         name = $($(html).find("." + FieldClass)[i]).attr("name");
         
         
         if ($(html).find('[name='+name+']').is( "a"))
   	      {
   	  	
   	  	
   	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
   	  		{		
   	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
   	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
   	  		
   	  		}
   	  	
   	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
   	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);
   	  }
   	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
   	  {
   	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);
   	  }
        
         
   	  else if($(html).find('[name='+name+']').attr('type')=="button")
   	{

   	   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
   	     {
   	 
   		var datavalue = $(html).find('[name='+name+']').attr('data-value');
   		 
   		var TableID = datavalue.split("|")[0] + j;
   		var SPNAME = datavalue.split("|")[1];
   		
   		var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

   		var params2 = datavalue.split("|")[3];
   		
   		var Param2 = "";
   		for (y=0;y<params2.split("~").length;y++)
   			{
   			
   			Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
   			
   			}
   		
   		Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
   		
   		var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
   		var mainrowno = "";
   		var HdnClms = datavalue.split("|")[5];
   		var Fnctype = datavalue.split("|")[6];
		var attr =$(html).find('[name='+name+']').attr("data-custom-html-handle");
		var BtnClick = "";
	if (typeof attr !== 'undefined' && attr !== false) {
		$(html).find('[name='+name+']').attr("data-html",$(html).closest(".dynrow").attr("data-row"));
		mainrowno=$(html).closest(".dynrow").attr("data-row");
		BtnClick =  "FncallDocChkLst_Custom_BankDtl(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+",Html:"+mainrowno+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
	}
	else{
		BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
	}		  
   		$(html).find('[name='+name+']').attr("onclick",BtnClick);
   	    
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
   		
   	     }
   	            		  
   	            	  
   	}
   	else if ($(html).find('[name='+name+']').is( "table"))
   	{
   		
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

   	}
         
         
         if($(html).find('[name='+name+']').attr('type')=="button")
         {

            if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
              {
            	$(html).find('[name='+name+']').addClass("AddMultiGridTrg");
              }
            
              }

         if ($(html).find("[for="+name+"]").length > 0)
         {
         $(html).find("[for="+name+"]").attr("for",name + j)
         }
         
         if($(html).find("#"+name).is("select"))
         {
        	  $(html).find("#"+ name).addClass("mdb-select");
         }
         
         if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
         {
        	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
        	 
        	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
        	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
         }
         
              
         $(html).find("#"+name).attr("id",name + j);
         
      
         
         
        }
        
      handleonadd(html);
        
      $("."+DV).append(html);
      
      
      $("."+DV).last().find('.mdb-select').material_select('destroy');
      $("."+DV).last().find('.mdb-select').material_select();
   // Calendar
      var $input = $(document).find('.datepicker').pickadate({
          //editable: 'true',
      format: 'dd/mm/yyyy',
      selectYears: 200,
      selectMonths: true
      })
      .on("change", function() {
        $(this).prev().prev().val($(this).val());
        $(this).prev().prev().focus();
      });

      $("."+DV).last().find(".AddMultiGridTrg").click();
      
      
      
      
      // $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
      
     // var scrollPos =  $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
		 //$(window).scrollTop(parseInt(scrollPos));
		    
}

