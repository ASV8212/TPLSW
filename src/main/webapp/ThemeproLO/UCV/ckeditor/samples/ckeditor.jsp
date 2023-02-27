
<!DOCTYPE html>
<%@page language="java" import="java.util.*" %>

<!--
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
-->
<html>
<head>
	<meta charset="utf-8">
	<title>CKEditor Sample</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
	
	<script src="../ckeditor.js"></script>
	<script src="../BrowserIdentity.js"></script>
	<script src="js/sample.js"></script>
	<script src="/ckeditor22/ckeditor_4.7.3_full/ckeditor/Onload1.js"></script>
	<link rel="stylesheet" href="css/samples.css">
	<link rel="stylesheet" href="toolbarconfigurator/lib/codemirror/neo.css">
	
</head>
<body id="main">

<nav class="navigation-a">
	<div class="grid-container">
		<ul class="navigation-a-left grid-width-70">
			<li><a href="http://ckeditor.com">Project Homepage</a></li>
			<li><a href="https://github.com/ckeditor/ckeditor-dev/issues">I found a bug</a></li>
			<li><a href="http://github.com/ckeditor/ckeditor-dev" class="icon-pos-right icon-navigation-a-github">Fork CKEditor on GitHub</a></li>
		</ul>
		<ul class="navigation-a-right grid-width-30">
			<li><a href="http://ckeditor.com/blog-list">CKEditor Blog</a></li>
		</ul>
	</div>
</nav>

<header class="header-a">
	<div class="grid-container">
		<h1 class="header-a-logo grid-width-30">
			<a href="index.html"><img src="img/logo.png" alt="CKEditor Sample"></a>
		</h1>

		<nav class="navigation-b grid-width-70">
			<ul>
				<li><a href="index.html" class="button-a button-a-background">Start</a></li>
				<li><a href="toolbarconfigurator/index.html" class="button-a">Toolbar configurator <span class="balloon-a balloon-a-nw">Edit your toolbar now!</span></a></li>
			</ul>
		</nav>
	</div>
</header>
<form action="/ckeditor22/Search2" method="POST">
<input type="hidden" id="pid" name="pid" value="46950_MCRFN_MicroFn" >
<main>
	<div class="adjoined-top">
		<div class="grid-container">
			<div class="content grid-width-100">
				<h1>Congratulations!</h1>
				<p>
					If you can see CKEditor below, it means that the installation succeeded.
					You can now try out your new editor version, see its features, and when you are ready to move on, check some of the <a href="#sample-customize">most useful resources</a> recommended below.
				</p>
			</div>
		</div>
	</div>

	<!-- FetchEditTxt myObject = new FetchEditTxt();
	Sam_sFetchEditTxt request=new Sam_sFetchEditTxt(); -->
 <%
                int count = 0;
               
                if (request.getAttribute("piList") != null) {
                    ArrayList al = (ArrayList) request.getAttribute("piList");
                    System.out.println(al);
                    Iterator itr = al.iterator();
                    while (itr.hasNext()) {
 
                       
                        count++;
                        ArrayList pList = (ArrayList) itr.next();
            %>
				
	<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<textarea  id="BCDT_HdnBasicDetl" value="">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				<!-- <input type="submit" id="BCDT_HdnBasicDetl" name="BCDT_HdnBasicDetl" >
				 -->
				 
		 <%=pList.get(0)%>
				 </textarea >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnCusDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				<%=pList.get(1)%>
				</div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnLonDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
					<%=pList.get(2)%>
				</div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnHODetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				<%=pList.get(3)%>
				</div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnAddrDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				<%=pList.get(4)%>
				</div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnSalDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				
				 <%=pList.get(5)%></div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnGrpDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				
				 <%=pList.get(6)%></div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnRcmDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				 <%=pList.get(7)%></div >
			</div>
		</div>
	</div>
	<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnBrDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				 <%=pList.get(8)%></div >
			</div>
		</div>
	</div>
<br><br>
		<div class="adjoined-bottom">
		<div class="grid-container">
			<div class="grid-width-100">
				<div  id="BCDT_HdnExLonDetl">
					<h1>Hello world!</h1>
					<p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
				 <%=pList.get(9)%></div >
				  <%
                    }
                }
                
            %>
			</div>
		</div>
	</div>
	
	<input type="button" id="Save" value="Save" name="Save">
	<input type="button" id="View" value="View" name="View">
	
</main>
</form>

<footer class="footer-a grid-container">
	<div class="grid-container">
		<p class="grid-width-100">
			CKEditor &ndash; The text editor for the Internet &ndash; <a class="samples" href="http://ckeditor.com/">http://ckeditor.com</a>
		</p>
		<p class="grid-width-100" id="copy">
			Copyright &copy; 2003-2017, <a class="samples" href="http://cksource.com/">CKSource</a> &ndash; Frederico Knabben. All rights reserved.
		</p>
	</div>
</footer>
<script>
	initSample('BCDT_HdnBasicDetl');
	initSample('BCDT_HdnCusDetl');
	initSample('BCDT_HdnLonDetl');
	initSample('BCDT_HdnHODetl');
	initSample('BCDT_HdnAddrDetl');
	initSample('BCDT_HdnSalDetl');
	initSample('BCDT_HdnGrpDetl');
	initSample('BCDT_HdnRcmDetl');
	initSample('BCDT_HdnBrDetl');
	initSample('BCDT_HdnExLonDetl');
//	FCKeditor_OnComplete('BCDT_HdnBasicDetl')
	
        function redirect(){
        window.location = "/ckeditor22/UI_FetchTxtData"
        }
       

</script>

</body>
</html>
</html>