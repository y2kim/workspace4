<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
		<script>
		alert(${result})
		if(${result>0}){
			alert("삽입성공");
			location.href="newcal.jsp";
		}else{
			alert("삽입실패");
			location.href="newcal.jsp";
		}
		</script>
</body>
</html>