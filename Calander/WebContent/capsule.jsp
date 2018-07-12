<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/jquery.datetimepicker.css">
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
<script type="text/javascript"
	src="http://code.jquery.com/ui/1.8.0/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.datetimepicker.full.js"></script>
<title>Insert title here</title>
</head>
<body>

   <form action="timeinto.do" method="post" id="timetable">
	<input id="date_timepicker_start" type="text" value="" name="startcal">
	<input id="datetimepicker1" type="text" value="" name="starttime">
	<p>뚝배기</p>
	<input id="date_timepicker_end" type="text" value="" name="endcal">
	<input id="datetimepicker2" type="text" value="" name="endtime">
	
	<button type="button" id="insert">insert연습</button>
	</form>
	<script>
	
	
jQuery(function(){
	
	var dateToday =new Date();
	
	var year = dateToday.getFullYear();
	var month = dateToday.getMonth()+1;
	var day = dateToday.getDate();
	var output = year + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;
	
	
	 jQuery('#date_timepicker_start').datetimepicker({
	  format:'Y/m/d',
	  onShow:function( ct ){
	   this.setOptions({
		minDate:'0',
	    maxDate:jQuery('#date_timepicker_end').val()?jQuery('#date_timepicker_end').val():false
	   })
	  },
	  timepicker:false
	 });
	 
	 
	 if($("#date_timepicker_start").val()==null){
			alert("first 값부터 입력해주세요")
	}else{
		
	}
	 jQuery('#date_timepicker_end').datetimepicker({
	  format:'Y/m/d',
	  onShow:function( ct ){
	   this.setOptions({
	    minDate:jQuery('#date_timepicker_start').val()||'0'?jQuery('#date_timepicker_start').val()||'0':false
	   })
	  },
	  timepicker:false
	 });
	 
	 
	 jQuery('#datetimepicker1').datetimepicker({
		  datepicker:false,
		  format:'H:i',
		  onShow:function(ct){
			  if($("#date_timepicker_start").val()==output){
			  this.setOptions({
				  minTime:new Date()
			  });
			  }else{
				  this.setOptions({
					  minTime:'0:00'
				  });
			  }
		  }
		});
	jQuery('#datetimepicker2').datetimepicker({
		  datepicker:false,
		  format:'H:i',
		  onShow:function(ct){
			  if($("#date_timepicker_end").val()==$("#date_timepicker_start").val()){
			  this.setOptions({
				  minTime:jQuery('#datetimepicker1').val()||new Date()?jQuery('#datetimepicker1').val()||new Date():false
			  })
			  }else{
				  this.setOptions({
				  minTime:'0:00'
				  })
			  }
		  }
		}); 
	 
	});
	
	$("#insert").click(function() {
		 $('#timetable').submit();
	})
	
	
</script>

</body>
</html>