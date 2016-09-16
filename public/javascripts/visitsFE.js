// Front end js

// because the API is called in the footer the body of the document is already done when this function is called
var israelHolidays = function(data)
{
	for (var i=0; i<data.length; i++)
	{
		var dateString = data[i].date.day + '-' + data[i].date.month + '-' + data[i].date.year;
		var holidayDiv = document.createElement('div');
		var text = document.createTextNode(data[i].localName);
		holidayDiv.appendChild(text);
		$('div#display-month div#' + dateString).append(holidayDiv);
		$('div#display-month div#' + dateString + ' div').addClass('israli-holiday');
	}
}
$(document).ready(function()
{
	var date = $('div#display-month div.current').first().attr('id');
	var month = parseInt(date.split('-')[1],10);
	var year = parseInt(date.split('-')[2],10);
	$("#visit-month option:nth-child("+month+")").attr('selected', true);
	var today = new Date();
	var todayString = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
	$('div#display-month div#' + todayString).addClass('today');

	var selectEelement = document.getElementById("visit-year");
	for (var i=0; i<5; i++)
	{
		var option = document.createElement("option");
		if (parseInt(year)==today.getFullYear()+i)
		{
			option.selected = true;
		}
		option.text = today.getFullYear()+i;
		selectEelement.add(option);
	}

	$( "#btn-view-month" ).click(function()
	{
		var e = document.getElementById("visit-year");
		var selectedMonth = $('#visit-month option:selected').attr("value");
		var selectedYear = $('#visit-year option:selected').text();
		window.location = "/visit/"+selectedMonth+'-'+selectedYear;
	});
});