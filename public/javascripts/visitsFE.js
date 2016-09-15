// Front end js
$(document).ready(function()
{
	var date = $('div#display-month div.current').first().attr('id');
	var month = date.split('-')[1];
	var year = date.split('-')[2];
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