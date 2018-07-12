<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
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

<script>
$( "#datepicker" ).datepicker({
	dateFormat:"yymmdd",
	onSelect: findEvents
});
function findEvents (date) {  
	$.ajax({
		url:"meetcal.do",
		type:"post",
		data:{val:date},	
		dataType : "json",
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
					var day = response[i].date;
					var hour = response[i].hour;
					var group = response[i].groupName;
					var title =  response[i].groupTitle;
					var location = response[i].Location;
					$("#response").text($("#response").text()+ day+":"+hour+":"+group+":"+title+":"+location);
				}
			
		},
		error:function(request,status,error){
			console.log(request.status+":"+status.responseText+":"+ error);
		},
		complete:function(){
			console.log("성공이건 실패건 어찌되었든 ajax 종료");
		}
	});
}

</script>
</body>
</html>