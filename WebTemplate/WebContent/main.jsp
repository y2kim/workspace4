<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
		<script>
		alert(${howlong})
		if(${howlong>90}){
			alert("비밀번호를 다시바꿔주세요.");
			location.href="index.jsp";
		}else{
			alert("비밀번호를 안바꿔도 됩니다");
			location.href="index.jsp";
		}
		</script>
</body>
</html>