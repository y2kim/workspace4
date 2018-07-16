<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<style >
		div{
			border: 1px dotted black;
			box-sizing: border-box;
		}
		
		#wrapper{
			width: 1200px;
			height: 600px;
			margin: 0px auto;
		}
		
		
		#line1{
			width:100%;
			height: 50%;
		}
		
		.exam{
			float:left;
			width: 25%;
			height: 300px;
		}
		.exam div{
			text-align: center;
			width:200px;
			margin-left: 25%;
			margin-top: 40%;
			
		}
		
</style>
<script >
$("#back").click(function(){
	$(location).attr("href","index.html");
});
</script>
</head>
<body>
<div id="wrapper">
<div>
 	<c:forEach var="item" items="${list }">
 		${item.seq }<br>
 		${item.memberid }<br>
 		${item.password }<br>
 		${item.name }<br>
 		${item.email }<br>
 	</c:forEach>
</div>
<button id="back">back</button>
</body>
</html>