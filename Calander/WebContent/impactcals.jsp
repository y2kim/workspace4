<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.12.4.js"></script>
<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<style type="text/css">
.dp-highlight .ui-state-default {
	background: #484;
	color: #FFF;
}

.ui-datepicker.ui-datepicker-multi {
	width: 100% !important;
}

.ui-datepicker-multi .ui-datepicker-group {
	float: none;
}

#datepicker {
	height: 300px;
	overflow-x: scroll;
}

.ui-widget {
	font-size: 100%
}
</style>
</head>
<body>
	<p>
		Dates: <label><b>To:</b></label> <input type="text" id="input1"
			size="10"> <label><b>From:</b></label> <input type="text"
			id="input2" size="10">
	</p>
	<div class="datepicker"></div>

	<script type="text/javascript">
	
	  $.datepicker.setDefaults({
		    dateFormat: 'yy-mm-dd'
		});
	
	var disabledDates = ['2018-08-05','2018-08-12','2018-08-16','2018-09-01','2018-09-02','2018-09-03','2018-09-30'];
          $(".datepicker").datepicker({
  			minDate: 0,
  			beforeShowDay: function(date) {
  				var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
  				var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
  				var string = $.datepicker.formatDate('yy-mm-dd', date);
  				return [disabledDates.indexOf(string) == -1 , date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
  			},
  			onSelect: function(dateText, inst) {
  				var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
  				var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
                var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
                
                  
                  if (!date1 || date2) {
  					$("#input1").val(dateText);
  					$("#input2").val("");
                      $(this).datepicker("option", "minDate", dateText );
                  } else if( selectedDate < date1 ) {
                      $("#input2").val( $("#input1").val() );
                      $("#input1").val( dateText );
                      $(this).datepicker("option", "minDate", dateText );
                  } else {
  					$("#input2").val(dateText);
                      $(this).datepicker("option", "minDate", null);
  				  }
                  
                  
              	$.ajax({
            		url:"cals.do",
            		type:"get",
            		data:{val:dateText},	 
            		success:function(response){
            			console.log("AJAX Request 성공 ");
            			$("#response").text(response);
            		},
            		error:function(){
            			console.log("에러발생!");
            		},
            		complte:function(){
            			console.log("성공이건 실패건 어찌되었든 ajax 종료");
            		}
            	});
              	
              	
  			}
  		});
          
         </script>

</body>
</html>