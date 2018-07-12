<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
 <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.12.4.js"></script>
  <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
<div id="datepicker"></div>
<p id="response"></p>
<button id="insert">insert</button>
<script>
$( "#datepicker" ).datepicker({
	dateFormat:"yymmdd",
	onSelect: findEvents

});
function findEvents (date) {  
	$.ajax({
		url:"datacall.do",
		type:"get",
		data:{val:date},	
		dataType : "json",
		contentType: "application/json",
		success:function(response){
			console.log("AJAX Request 성공 ");
				$("#response").text('');
			//for(var i=0;i<response.length;i++){
			//var beginDate = response[i].starttime;
			//var endDate = response[i].endtime;
			//var beginDate = response;
			//$("#response").text(beginDate);
			//	$("#response").text($("#response").text() + beginDate + " : " + endDate +" ");
			//}
				for(var i=0;i<response.length;i++){
					var beginDate = response[i].start;
					var endDate = response[i].end;
					var show = response[i].showDate;
					$("#response").text($("#response").text()+ beginDate+":"+endDate+":"+show);
				}
			
		},
		error:function(request,status,error){
			console.log(request.status+":"+status.responseText+":"+ error);
		},
		complte:function(){
			console.log("성공이건 실패건 어찌되었든 ajax 종료");
		}
	});
}

</script>
</body>
</html>