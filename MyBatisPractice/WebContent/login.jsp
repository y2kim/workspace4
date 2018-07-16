<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html PUBLIC >
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

</script>
</head>
<body>
	<div id="wrapper">
		<div id="exam01"  class="exam">
			<form action="login.do" method="post">
					<input type="text" placeholder="아이디" name="memberid" id="val1" ><br>
					<input type="text" placeholder="비밀번호" name="password" id="val2" ><br>
					<button>로그인</button>
			</form>
		</div>
	</div>
</body>
</html>