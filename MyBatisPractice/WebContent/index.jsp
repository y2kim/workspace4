<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
<script>
$(document).ready(function() {
	
	$("#sign").click(function(){
		$(location).attr("href","sign.html");
	});
	$("#out").click(function(){
		$(location).attr("href","out.html");
	});
	$("#modi").click(function(){
		$(location).attr("href","modi.html");
	});
	//$("#info").click(function(){
		//$(location).attr("href","info.html");
	//});
	
	$("#login").click(function(){
		$(location).attr("href","login.jsp");
	});
	
})
</script>
</head>
<body>

<c:choose>

<c:when test="${list.memberid != null}">

<div id="wrapper">
		<div id="line1">
		  <div id="exam01" class="exam">
		  		<button id="login">로그인</button>
		  </div>
		  <div id="exam02" class="exam">
		  		로그인 해주세요
		  </div>
		</div>
		<div id="line2"> 
			<div id="exam01" class="exam">
				<button id="sign">회원가입</button>
			</div>
			<div id="exam02" class="exam">
				
			</div>
			<div id="exam03" class="exam">
				
			</div>
			<div id="exam04" class="exam">
			<form action="select.do">
				<button id="info">정보보기</button>
			</form>
			</div>
		</div>
	</div>

</c:when>
<c:otherwise> 
<div id="wrapper">
		<div id="line1">
		  <div id="exam01" class="exam">
		  		<button id="login">로그아웃</button>
		  </div>
		  <div id="exam02" class="exam">
		  		로그인 해주세요
		  </div>
		</div>
		<div id="line2"> 
			<div id="exam01" class="exam">

			</div>
			<div id="exam02" class="exam">
				<button id="out">회원탈퇴</button>
			</div>
			<div id="exam03" class="exam">
				<button id="modi">정보수정</button>
			</div>
			<div id="exam04" class="exam">
			<form action="select.do">
				<button id="info">정보보기</button>
			</form>
			</div>
		</div>
	</div>

</c:otherwise>


</c:choose>
</body>
</html>