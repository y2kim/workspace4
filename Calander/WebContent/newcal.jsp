<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  
</head>
<body>
<form action="insert.do" method="post" id="ins">
<input type="text" id="datepicker" name="date">
<p id="response"></p>
<button id="insert" type="button">insert</button>
</form>
 <script>
  $( function() {
    $( "#datepicker" ).datepicker({
    	dateFormat:"yymmdd"
    });
  } );
  
  $("#insert").click(function() {
	  $('#ins').submit();
  })
  </script>
</body>
</html>