<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2 align="center">Log in Validation </h2>
 
<%
  String str1=request.getParameter("t1");
  String str2=request.getParameter("t2");
 
  if(str1.equalsIgnoreCase("snrao") && str2.equals("java"))
  {
    out.println("<h3>Your Login is Successful</h3>");    
  }
  else
  {
    out.println("<h3>Sorry, your Login is Failed</h3>");    
  }
%>
 
</body>
</html>