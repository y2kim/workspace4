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
  <style type="text/css">
          #dp-highlight .ui-state-default {
          background: #484;
          color: #FFF;
        }
        #ui-datepicker.ui-datepicker-multi  {
          width: 100% !important;
        }
        #ui-datepicker-multi .ui-datepicker-group {
        float:none;
        }
        #datepicker {
          height: 300px;
          overflow-x: scroll;
        }
		.ui-widget { font-size: 100% }
  
  </style>
</head>
<body>
 <input type="text" id="input1" size="10">
 <input type="text" id="input2" size="10">
<div id="datepicker"></div>
<p id="response"></p>
<button id="insert">insert</button>

<script>
var rangeDate = 31;
var dateToday = new Date();
var disabledDates = ['2018-08-05','2018-08-12','2018-08-16','2018-09-01','2018-09-30','2018-09-02','2018-09-03'];
$( "#datepicker" ).datepicker({
	dateFormat:"yy-mm-dd",
	onSelect: findEvents,
	minDate: dateToday,
	beforeShowDay: function(date){
         var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
         var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
         var string = $.datepicker.formatDate('yy-mm-dd', date);
         return [disabledDates.indexOf(string) == -1, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""
        		  ]},
});
function findEvents (date) {  
    var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
    var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
    var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, date);
    
    if (!date1 || date2) {
        $("#input1").val(date);
        $("#input2").val("");
        $(this).datepicker();
    } else if( selectedDate < date1 ) {
        $("#input2").val( $("#input1").val() );
        $("#input1").val( date );
        $(this).datepicker();
    } else {
        $("#input2").val(date);
        $(this).datepicker();
    }
	
	$.ajax({
		url:"cals.do",
		type:"get",
		data:{val:date},	 
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

</script>
</body>
</html>