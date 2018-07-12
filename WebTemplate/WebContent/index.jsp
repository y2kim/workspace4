<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
        <form action="LoginContol.do" method="post" id="longid">
		<table border="1">
			<tr>
			<td>아이디 :</td>
			<td><input type="text" id="textid" name="id"></td>
			</tr>
			<tr>
				<td><button id="login" type="button">login</button></td>
			</tr>
		</table>
		</form>
		<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
		<script>
		 	$(document).ready(function() {
				$("#login").click(function() {
					$('#longid').submit();
				})

			})
		</script>
</body>
</html>