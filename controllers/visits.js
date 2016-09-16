var MongoDB = require('../MongoDB.js');
var MongoDBInstance = new MongoDB; 
var database = MongoDBInstance.connect('family');

var getDays = function (month, year)
{
	if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12))
		return 31;
	if ((month == 4) || (month == 6) || (month == 9) || (month == 11))
		return 30;
	if ((year%4==0) && !((year%400!=0) && (year%100==0)))
		return 29
	return 28
}

var getCalanderDays = function (month, year)
{
	var today = new Date();
	var monthStart = (new Date(year,month-1,1)).getDay();
	var prevMonth = month-1;
	var nextMonth = month+1;
	var prevYear = year;
	var nextYear = year;
	if (prevMonth==0)
	{
		prevMonth = 12
		prevYear = year-1;
	}
	if (nextMonth==13)
	{
		nextMonth = 1
		nextYear = year+1;
	}
	var days = [];
	for (var i=0; i<monthStart; i++)
	{
		var day = getDays(prevMonth,prevYear)-i;
		var date = new Date(prevYear, prevMonth-1,day);
		days[i] = {
			month: 'prev',
			day: day,
			date: date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
		}
	}
	days = days.reverse();
	var temp = days.length;
	for (var i=0; i<getDays(month, year); i++)
	{
		var date = new Date(year, month-1,i+1);
		days[temp+i] = {
			month: 'current',
			day: i+1,
			date: date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
		}
	}
	var temp = days.length;
	for (var i=0; i<42-temp; i++)
	{
		var date = new Date(nextYear, nextMonth-1,i+1);
		days[temp+i] = {
			month: 'next',
			day: i+1,
			date: date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
		}
	}
	return days;
}

function display(req, res, next)
{
	var month = req.params.month;
	var year = req.params.year;
	month = parseInt(month, 10);
	year = parseInt(year, 10);
	if (isNaN(month) || isNaN(year)) 
	{
		month = (new Date()).getMonth()+1;
		year = (new Date()).getFullYear();
		res.redirect('/visit/'+month+'-'+year);
	}
	MongoDBInstance.find({}, function(documents)
  	{
		res.render('visit', { title: 'Visit page', 
							  site_name: 'Kogans in CH',
							  month: month,
							  year: year,
							  days: getCalanderDays(month,year)});
  	});
};

function redirect(req, res, next)
{
	var month = (new Date()).getMonth()+1;
	var year = (new Date()).getFullYear();
	res.redirect('/visit/'+month+'-'+year);
};

module.exports = {
                  'display': display,
                  'redirect': redirect
                 };