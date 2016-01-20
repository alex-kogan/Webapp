var MySQLDB = require('../MySQLDB.js');
var MySQLDBInstance = new MySQLDB; 
MySQLDBInstance.connect();

function family(req, res, next)
{
	MySQLDBInstance.query('SELECT * FROM events', function(rows, fields)
  {
		res.render('index', { title: 'Example Page', 
							  site_name: 'Backend',
							  data: rows});
  });
};

module.exports = {
									'family': family
				 				 };