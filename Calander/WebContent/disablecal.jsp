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
<label for="from">From</label> <input type="text" id="from" name="from"/>
<label for="to">to</label> <input type="text" id="to" name="to"/>
<p id="response"></p>
<button id="insert">insert</button>
<script>
var dateToday = new Date();
var dates = $("#from,#to").datepicker({
	dateFormat:"yymmdd",
	minDate: dateToday,
	onSelect: function(selectedDate) {
		var option = this.id == "from" ? "minDate" : "maxDate",
	            instance = $(this).data("datepicker"),
	            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
	        dates.not(this).datepicker("option", option, date);
	}
});


</script>
</body>
</html>