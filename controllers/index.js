//var MySQLDB = require('../MySQLDB.js');
//var MySQLDBInstance = new MySQLDB; 
//MySQLDBInstance.connect();

function index(req, res, next)
{
	//MySQLDBInstance.query('SELECT * FROM events', function(rows, fields)
  	res.render('index', {
  		title: 'Main Page', 
		site_name: 'Kogans in CH'});
};

/* GET home page. */
module.exports = {
                  'index': index
                 };